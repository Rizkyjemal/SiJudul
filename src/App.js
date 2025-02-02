// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import {
  getAllPengajuan,
  getAllPengajuanByDospemId,
  getAllStudents,
  getAllStudentsBimbingan,
} from "./models/apiCall";
import { useEffect, useState } from "react";

function App() {
  const [pengajuan, setPengajuan] = useState([]);
  const [mahasiswa, setMahasiswa] = useState([]);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;
    setIsAdmin(roles.includes("admin"));

    const fetchData = async () => {
      try {
        let res;
        let resMahasiswa;
        if (roles.includes("admin")) {
          res = await getAllPengajuan();
          resMahasiswa = await getAllStudents();
        } else {
          res = await getAllPengajuanByDospemId({ id: authObject.data.id });
          resMahasiswa = await getAllStudentsBimbingan({
            id: authObject.data.id,
          });
        }
        console.log("API Response:", res);
        setMahasiswa(resMahasiswa.mahasiswa_list);
        if (Array.isArray(res.result)) {
          setPengajuan(res.result);
        } else {
          setError("Unexpected API response format");
        }
      } catch (error) {
        console.error("Error fetching pengajuan data:", error);
        setError("Failed to fetch data");
      } finally {
        setIsPageLoading(false);
      }
    };
    fetchData();
  }, []);

  const acceptedProposals = pengajuan.filter(
    (item) => item.status_acc === "Approved"
  );
  const pendingProposals = pengajuan.filter(
    (item) => item.status_acc === "Pending"
  );
  const rejectedProposals = pengajuan.filter(
    (item) => item.status_acc === "Rejected"
  );

  return (
    <div className="App">
      {isPageLoading ? (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalLoadingLabel"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLoadingLabel">
                  Loading
                </h5>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Searchbar />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <a href="/proposal">
                      <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Proposals
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {pengajuan?.length || 0}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {!isAdmin && (
                    <div className="col-xl-3 col-md-6 mb-4">
                      <a href="/students">
                        <div className="card border-left-success shadow h-100 py-2">
                          <div className="card-body">
                            <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Students
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                  {mahasiswa?.length || 0}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
              </div>

              <div className="dashboard">
                <div className="tables-section">
                  <div className="table-container">
                    <a href="/acceptedproposal">
                      <h3 className="accepted-title">Accepted Proposals</h3>
                    </a>
                    <table className="accepted">
                      <thead>
                        <tr>
                          <th>Nama Mahasiswa</th>
                          <th>Judul Proposal</th>
                          <th>NIM</th>
                        </tr>
                      </thead>
                      <tbody>
                        {acceptedProposals.map((item, index) => (
                          <tr key={index}>
                            <td>{item.mahasiswa.name}</td>
                            <td>{item.judul}</td>
                            <td>{item.mahasiswa.nim}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="table-container">
                    <a href="/pendingproposal">
                      <h3 className="pending-title">Pending Proposals</h3>
                    </a>
                    <table className="pending">
                      <thead>
                        <tr>
                          <th>Nama Mahasiswa</th>
                          <th>Judul Proposal</th>
                          <th>NIM</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingProposals.map((item, index) => (
                          <tr key={index}>
                            <td>{item.mahasiswa.name}</td>
                            <td>{item.judul}</td>
                            <td>{item.mahasiswa.nim}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="table-container">
                    <a href="/rejectedproposal">
                      <h3 className="rejected-title">Rejected Proposals</h3>
                    </a>
                    <table className="rejected">
                      <thead>
                        <tr>
                          <th>Nama Mahasiswa</th>
                          <th>Judul Proposal</th>
                          <th>NIM</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rejectedProposals.map((item, index) => (
                          <tr key={index}>
                            <td>{item.mahasiswa.name}</td>
                            <td>{item.judul}</td>
                            <td>{item.mahasiswa.nim}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

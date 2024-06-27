import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
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
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
            </div>

            <div className="dashboard">
              <div className="tables-section">
                <div className="table-container">
                  <h3 className="accepted-title">Accepted Proposals</h3>
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
                  <h3 className="rejected-title">Rejected Proposals</h3>
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
                <div className="table-container">
                  <h3 className="pending-title">Pending Proposals</h3>
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
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; SiJudul - UPN Veteran Jakarta 2024</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

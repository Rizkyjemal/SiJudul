import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { getAllPengajuan } from "./models/apiCall";
import { useEffect, useState } from "react";

function App() {
  const [pengajuan, setPengajuan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllPengajuan();
      console.log(res);
      setPengajuan(res.result);
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
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Proposal Requests
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {pengajuan.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Students
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            6
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      </tr>
                    </thead>
                    <tbody>
                      {acceptedProposals.map((item, index) => (
                        <tr key={index}>
                          <td>{item.mahasiswa.name}</td>
                          <td>{item.judul}</td>
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
                      </tr>
                    </thead>
                    <tbody>
                      {rejectedProposals.map((item, index) => (
                        <tr key={index}>
                          <td>{item.mahasiswa.name}</td>
                          <td>{item.judul}</td>
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
                      </tr>
                    </thead>
                    <tbody>
                      {pendingProposals.map((item, index) => (
                        <tr key={index}>
                          <td>{item.mahasiswa.name}</td>
                          <td>{item.judul}</td>
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

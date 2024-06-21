import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { getAllPengajuan } from "./models/apiCall";
import { useEffect, useState } from "react";
export default function Lectures() {
  const [pengajuan, setPengajuan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllPengajuan();
      console.log(res);
      setPengajuan(res.result);
    };
    fetchData();
  }, []);

  return (
    <div id="wrapper">
      {/* sidebar */}
      <Sidebar />
      {/* end of sidebar */}

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">
              Daftar Pengajuan Judul Proposal Mahasiswa
            </h1>
            <p className="mb-4">
              Halaman ini berisi list daftar pengajuan judul proposal mahasiswa
              Informatika.
            </p>
            <a
              href="#"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Edit Data
              Proposal Mahasiswa
            </a>
            <br></br>
            <br></br>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Daftar Ajuan Judul Proposal
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Nama Mahasiswa</th>
                        <th>NIM</th>
                        <th>Judul Proposal</th>
                        <th>Status Pengajuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pengajuan?.map((item, index) => (
                        <tr key={index}>
                          <td>{item?.mahasiswa.name}</td>
                          <td>{item?.mahasiswa.nim}</td>
                          <td>{item?.judul}</td>
                          <td
                            className={
                              item.status_acc == "Pending"
                                ? "bg-secondary text-white"
                                : item.status_acc == "Approved"
                                ? "bg-success text-white"
                                : item.status_acc == "Rejected"
                                ? "bg-danger text-white"
                                : ""
                            }
                          >
                            {item?.status_acc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
  );
}

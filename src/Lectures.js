import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { getAllDosen } from "./models/apiCall";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Lectures() {
  const navigate = useNavigate();
  const [dosen, setDosen] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;

    setIsAdmin(roles.includes("admin"));

    const fetchData = async () => {
      const res = await getAllDosen();
      setDosen(res.result);
    };
    fetchData();
  }, [isAdmin]);

  const handleRowClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">
              Data Dosen Pembimbing Proposal Skripsi
            </h1>
            <p className="mb-4">
              Halaman ini berisi list Dosen Pembimbing Proposal Skripsi yang
              tersedia untuk membimbing mahasiswa semester ini.
            </p>
            {isAdmin && (
              <a
                href="/tambahdosen"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Add Data
                Dosen
              </a>
            )}

            <br></br>
            <br></br>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Dosen Pembimbing
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
                        <th>Nama Dosen</th>
                        <th>Posisi/Jabatan</th>
                        <th>Email</th>
                        <th>NIDN</th>
                        <th>Kapasitas Bimbingan</th>
                        <th>Program Studi</th>
                        <th>Kepakaran</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dosen?.map((item, index) => (
                        <tr
                          key={index}
                          className="clickable-row"
                          onClick={() => handleRowClick(item?.id)}
                        >
                          <td>
                            <strong>{item?.name}</strong>
                          </td>
                          <td> {item?.jabatan}</td>
                          <td>{item?.email}</td>
                          <td>{item?.nidn}</td>
                          <td>{item?.kapasitas}</td>
                          <td>{item?.prodi}</td>
                          <td>{item?.kepakaran}</td>
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
      <style jsx>{`
        .clickable-row {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import { getAllDosen } from "./models/apiCall";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Lectures() {
  const navigate = useNavigate();
  const [dosen, setDosen] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;

    setIsAdmin(roles.includes("admin"));
    console.log();

    const fetchData = async () => {
      const res = await getAllDosen();
      const sortedData = res.result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setDosen(sortedData);
      setIsPageLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [isAdmin]);

  const handleRowClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div id="wrapper">
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
        <>
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
                    <i className="fas fa-download fa-sm text-white-50"></i> Add
                    Data Dosen
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
                            <th>Email</th>
                            <th>NIDN</th>
                            <th>Posisi / Jabatan</th>
                            <th>Program Studi</th>
                            <th>Kepakaran</th>
                            <th>Kapasitas Bimbingan</th>
                            <th>Total Bimbingan</th>
                            <th>Gelar</th>
                            <th>Jenjang Akademik</th>
                            <th>Nomor Telepon</th>
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
                              <td>{item?.email}</td>
                              <td>{item?.nidn}</td>
                              <td>{item?.jabatan}</td>
                              <td>{item?.prodi}</td>
                              <td>{item?.kepakaran}</td>
                              <td>{item?.kapasitas}</td>
                              <td>{item?.mahasiswa_bimbingan_id?.length}</td>
                              <td>{item?.gelar}</td>
                              <td>{item?.jenjang_akademik}</td>
                              <td>{item?.no_telp}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </>
      )}
      <style jsx>{`
        .clickable-row {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

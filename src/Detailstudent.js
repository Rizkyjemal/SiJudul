import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import { getPengajuanById, getPengajuanByIdMahasiswa } from "./models/apiCall";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Detailstudent() {
  const [pengajuanList, setPengajuanList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUrl = window.location.href;
    const segments = currentUrl.split("/");
    const mahasiswaId = segments[segments.length - 1];

    const fetchData = async () => {
      const res = await getPengajuanByIdMahasiswa({ id: mahasiswaId });
      console.log(res, "api");
      setPengajuanList(res.result);
    };
    fetchData();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/approval/${id}`);
  };

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">
              Detail Mahasiswa Bimbingan
            </h1>
            <p className="mb-4">
              Halaman ini berisi list history pengajuan mahasiswa bimbingan.
            </p>
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
                        <th>Judul Proposal</th>
                        <th>Dosen Pembimbing 1</th>
                        <th>Dosen Pembimbing 2</th>
                        <th>Status Pengajuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pengajuanList?.map((item, index) => (
                        <tr
                          key={index}
                          className="clickable-row"
                          onClick={() => handleRowClick(item?.id)}
                        >
                          <td>{item.judul}</td>
                          <td>{item.dospem1.name}</td>
                          <td>{item.dospem2.name}</td>
                          <td
                            className={
                              item.status_acc === "Pending"
                                ? "bg-secondary text-white centered"
                                : item.status_acc === "Approved"
                                ? "bg-success text-white centered"
                                : item.status_acc === "Rejected"
                                ? "bg-danger text-white centered"
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

        <Footer />
      </div>
      <style jsx>{`
        .clickable-row {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

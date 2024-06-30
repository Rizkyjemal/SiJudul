import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import { getAllPengajuan } from "./models/apiCall";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApprovalKaprodi() {
  const navigate = useNavigate();

  const [pengajuan, setPengajuan] = useState([]);

  const handleRowClick = (id) => {
    navigate(`/approval-kaprodi-detail/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllPengajuan();
      const sortedData = res.result.sort((a, b) => {
        const order = { Pending: 1, Approved: 2, Rejected: 3 };
        return order[a.status_acc] - order[b.status_acc];
      });

      console.log(sortedData, "soooo");
      const approvedArray = sortedData.filter(
        (item) =>
          item.status_acc === "Approved" ||
          item.status_acc_kaprodi === "Rejected" ||
          item.status_acc == "Rejected"
      );

      setPengajuan(approvedArray);
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
                        <th>Dosen Pembimbing 1</th>
                        <th>Dosen Pembimbing 2</th>
                        <th>Status Pengajuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pengajuan?.map((item, index) => (
                        <tr
                          key={index}
                          className="clickable-row"
                          onClick={() => handleRowClick(item?.id)}
                        >
                          <td>{item?.mahasiswa.name}</td>
                          <td>{item?.mahasiswa.nim}</td>
                          <td>{item?.judul}</td>
                          <td>{item.dospem1.name}</td>
                          <td>{item.dospem2.name}</td>
                          <td
                            className={
                              item.status_acc_kaprodi === "Pending"
                                ? "bg-secondary text-white centered"
                                : item.status_acc_kaprodi === "Approved"
                                ? "bg-success text-white centered"
                                : item.status_acc_kaprodi === "Rejected"
                                ? "bg-danger text-white centered"
                                : ""
                            }
                          >
                            {item?.status_acc_kaprodi}
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

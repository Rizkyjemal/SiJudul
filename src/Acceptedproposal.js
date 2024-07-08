import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import {
  getAllPengajuan,
  getAllPengajuanByDospemId,
  deleteProposal,
} from "./models/apiCall"; // Import deleteProposal
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Acceptedproposal() {
  const navigate = useNavigate();

  const [pengajuan, setPengajuan] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleRowClick = (id) => {
    navigate(`/approval/${id}`);
  };

  const handleDeleteClick = async (id) => {
    const response = await deleteProposal(id);
    if (response.result) {
      setModalMessage("Berhasil Menghapus Proposal!");
      setPengajuan(pengajuan.filter((item) => item.id !== id));
    } else {
      setModalMessage("Gagal Menghapus Proposal! Silakan Coba Lagi");
    }
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    window.location.reload();
  };

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;

    setIsAdmin(roles.includes("admin"));
    const fetchData = async () => {
      const jsonString = localStorage.getItem("auth");
      const authObject = JSON.parse(jsonString);
      let res;
      if (roles.includes("admin")) {
        res = await getAllPengajuan();
      } else {
        res = await getAllPengajuanByDospemId({ id: authObject.data.id });
      }
      // Filter only the "Approved" proposals
      const approvedProposals = res.result.filter(
        (item) => item.status_acc === "Approved"
      );

      setPengajuan(approvedProposals);
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
            <h1 className="h3 mb-2 text-gray-800">Approved Proposal</h1>
            <p className="mb-4">
              Halaman ini berisi list daftar judul proposal mahasiswa yang telah
              disetujui!
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
                        <th>Status Pengajuan</th>
                        {isAdmin && <th>Action</th>}
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
                          {isAdmin && (
                            <td>
                              <button
                                className="delete-button"
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevents triggering row click event
                                  handleDeleteClick(item?.id);
                                }}
                              >
                                Delete Proposal
                              </button>
                            </td>
                          )}
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
      {isModalVisible && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalApprovalLabel"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalApprovalLabel">
                  Pengajuan
                </h5>
                <button className="close" type="button" onClick={closeModal}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{modalMessage}</div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={closeModal}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .delete-button {
          background-color: #ff4d4d;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .delete-button:hover {
          background-color: #ff1a1a;
        }
        .modal.fade.show {
          display: block;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}

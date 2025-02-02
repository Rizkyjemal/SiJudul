import { useNavigate, useParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import {
  updatePengajuan,
  checkSimilarity,
  getPengajuanById,
  updatePengajuanKaprodi,
} from "./models/apiCall";

export default function ApprovalKaprodiDetail() {
  const { id } = useParams();
  const [, setStatusAcc] = useState("");
  const [rejectedNote, setRejectedNote] = useState("");
  const [plagiarismMessage, setPlagiarismMessage] = useState(null);
  const [proposal, setProposal] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingPlagiarism, setIsCheckingPlagiarism] = useState(false);
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isKaprodi, setIsKaprodi] = useState(false);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;
    setIsKaprodi(roles.includes("kaprodi"));

    const fetchProposal = async () => {
      const res = await getPengajuanById({ id: id });
      setProposal(res.result);
      setIsLoading(false);
    };
    fetchProposal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isKaprodi]);

  const closeModal = () => {
    setIsModalVisible(false);
    if (!loginFailed) {
      navigate("/");
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleAccept = () => {
    setStatusAcc("Approved");
    if (isKaprodi) {
      updateProposalKaprodi("Approved", rejectedNote);
    } else {
      updateProposal("Approved", rejectedNote);
    }
  };

  const handleReject = () => {
    setStatusAcc("Rejected");
    if (isKaprodi) {
      updateProposalKaprodi("Rejected", rejectedNote);
    } else {
      updateProposal("Rejected", rejectedNote);
    }
  };

  const handleNoteChange = (event) => {
    setRejectedNote(event.target.value);
  };

  const updateProposal = async (status, note) => {
    try {
      const response = await updatePengajuan({
        id,
        statusAcc: status,
        rejectedNote: note,
      });
      if (response.result) {
        setLoginFailed(false);
        setModalMessage("Berhasil Mengubah Status Pengajuan!");
      } else {
        setLoginFailed(true);
        setModalMessage("Gagal Mengubah Status Pengajuan! Silakan Coba Lagi");
      }
      openModal();
    } catch (error) {
      console.error("Error updating proposal:", error);
    }
  };

  const updateProposalKaprodi = async (status, note) => {
    try {
      const response = await updatePengajuanKaprodi({
        id,
        statusAcc: status,
        rejectedNote: note,
      });
      if (response.result) {
        setLoginFailed(false);
        setModalMessage("Berhasil Mengubah Status Pengajuan!");
      } else {
        setLoginFailed(true);
        setModalMessage("Gagal Mengubah Status Pengajuan! Silakan Coba Lagi");
      }
      openModal();
    } catch (error) {
      console.error("Error updating proposal:", error);
    }
  };

  const handlePlagiarismCheck = async () => {
    setIsCheckingPlagiarism(true);
    try {
      const response = await checkSimilarity({
        judul: proposal.judul,
        id: proposal.id,
      });
      if (response?.similar) {
        setPlagiarismMessage(
          `${response?.message} with "${
            response?.similar
          }" (${response?.similarity.toFixed(2)}%)`
        );
      } else {
        setPlagiarismMessage(`${response?.message}`);
      }
    } catch (error) {
      console.error("Error checking plagiarism:", error);
    }
    setIsCheckingPlagiarism(false);
  };

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">
              Permintaan Persetujuan Judul Proposal Skripsi Mahasiswa!
            </h1>
            <p className="mb-4">
              Dosen diminta untuk memberikan persetujuan atas judul proposal
              skripsi mahasiswa yang sudah di ajukan!
            </p>
            {proposal ? (
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-primary mb-3">
                    Data Mahasiswa
                  </h5>
                  <h6>Nama : {proposal.mahasiswa.name || "-"}</h6>
                  <h6>NIM : {proposal.mahasiswa.nim || "-"}</h6>
                  <h6>Agama : {proposal.mahasiswa.agama || "-"}</h6>
                  <h6>Angkatan : {proposal.mahasiswa.angkatan || "-"}</h6>
                  <h6>Email : {proposal.mahasiswa.email || "-"}</h6>
                  <h6>
                    Jenis Kelamin : {proposal.mahasiswa.jenis_kelamin || "-"}
                  </h6>
                  <h6>No Telp : {proposal.mahasiswa.no_telp || "-"}</h6>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div className="proposal-title">
                      <span>{proposal.judul}</span>
                      <button className="" onClick={handlePlagiarismCheck}>
                        Plagiarism Check
                      </button>
                    </div>
                    <div className="combined-card">
                      <div className="info-section">
                        <div className="info-item">
                          <strong>Abstrak:</strong>{" "}
                          {proposal.abstrak === "" ? "-" : proposal.abstrak}
                        </div>

                        <div className="info-item">
                          <strong>Peminatan:</strong>
                          <span>{proposal.peminatan}</span>
                        </div>
                        <div className="info-item">
                          <strong>Tempat Penelitian:</strong>
                          <span>{proposal.tempat_penelitian}</span>
                        </div>
                        <div className="info-item">
                          <strong>Angkatan:</strong>
                          <span>{proposal.mahasiswa.angkatan}</span>
                        </div>
                        <div className="info-item">
                          <strong>Program Studi:</strong>
                          <span>{proposal.mahasiswa.prodi}</span>
                        </div>
                        <div className="info-item">
                          <strong>Dosen Pembimbing 1:</strong>
                          <span>{proposal.dospem1.name}</span>
                        </div>
                        <div className="info-item">
                          <strong>Dosen Pembimbing 2:</strong>
                          <span>{proposal.dospem2.name}</span>
                        </div>
                      </div>
                    </div>
                    Status Proposal:
                    {proposal.status_acc_kaprodi === "Pending" ? (
                      <div className="status">
                        <button className="accept" onClick={handleAccept}>
                          Approve
                        </button>
                        <button className="reject" onClick={handleReject}>
                          Reject
                        </button>
                      </div>
                    ) : proposal.status_acc_kaprodi === "Approved" ? (
                      <div className="status">
                        <button disabled className="accept">
                          Approved
                        </button>
                      </div>
                    ) : (
                      <div className="status">
                        <button disabled className="reject">
                          Rejected
                        </button>
                      </div>
                    )}
                    <hr />
                    <div className="plagiarism-check">
                      Plagiarism Check :{" "}
                      {plagiarismMessage
                        ? plagiarismMessage
                        : "Belum dilakukan"}
                    </div>
                    {proposal.status_acc_kaprodi !== "Pending" ? (
                      <div className="comment-section">
                        <textarea
                          value={proposal.rejected_note}
                          disabled
                        ></textarea>
                      </div>
                    ) : (
                      <div className="comment-section">
                        <textarea
                          placeholder="Berikan Komentar..."
                          value={proposal.rejected_note}
                          onChange={handleNoteChange}
                          disabled
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading proposal data...</p>
            )}
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

      {(isLoading || isCheckingPlagiarism) && (
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
      )}

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </div>
  );
}

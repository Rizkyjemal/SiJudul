import { useNavigate, useParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import { FaElementor, FaCalendarCheck } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  updatePengajuan,
  checkSimilarity,
  getPengajuanById,
} from "./models/apiCall";


export default function Approval() {
  const { id } = useParams();
  const [statusAcc, setStatusAcc] = useState("");
  const [rejectedNote, setRejectedNote] = useState("");
  const [plagiarismResult, setPlagiarismResult] = useState(null); // State for plagiarism check result
  const [plagiarismMessage, setPlagiarismMessage] = useState(null); 
  const [proposal, setProposal] = useState();
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchProposal = async () => {
      const res = await getPengajuanById({ id: id });
      console.log(id, "oidd");
      setProposal(res.result[0]);
      console.log(res.result);
    };
    fetchProposal();
  }, [id]);

  const closeModal = () => {
    setIsModalVisible(false);
    if(!loginFailed){
      navigate('/');
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleAccept = () => {
    setStatusAcc("Approved");
    updateProposal("Approved", rejectedNote);
  };

  const handleReject = () => {
    setStatusAcc("Rejected");
    updateProposal("Rejected", rejectedNote);
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
      console.log("Response from API:", response);
    } catch (error) {
      console.error("Error updating proposal:", error);
    }
  };

  const handlePlagiarismCheck = async () => {
    try {
      const response = await checkSimilarity({
        judul: proposal.judul,
        id: proposal.id
      });
      // setPlagiarismResult(response);
      console.log(response)
      if (response?.similar) {
        setPlagiarismMessage(`${response?.message} with "${response?.similar}" (${response?.similarity.toFixed(2)}%)`)
      } else {
        setPlagiarismMessage(`${response?.message}`)
      }
      console.log("Plagiarism check result:", response);
    } catch (error) {
      console.error("Error checking plagiarism:", error);
    }
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
              skripsi mahasiswa yang sudah diajukan!
            </p>
            {proposal ? (
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    {proposal.mahasiswa.name}
                  </h6>
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
                          <strong>Abstrak:</strong> Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Donec ac elit blandit
                          felis mattis euismod sed nec massa. Cras varius
                          faucibus aliquet. Fusce ut metus non sem sollicitudin
                          iaculis eget a purus. Cras ornare libero nec lectus
                          euismod tincidunt. Praesent nulla erat, porttitor non
                          erat id, tempus pellentesque ligula. Mauris.
                        </div>

                        <div className="info-item">
                          <strong>Peminatan:</strong>
                          <span>Software Engineering - Software Engineer</span>
                        </div>
                        <div className="info-item">
                          <strong>Tempat Penelitian:</strong>
                          <span>UPN Veteran Jakarta</span>
                        </div>
                        <div className="info-item">
                          <strong>Angkatan:</strong>
                          <span>2020</span>
                        </div>
                        <div className="info-item">
                          <strong>Program Studi:</strong>
                          <span>S1 Informatika</span>
                        </div>
                      </div>
                    </div>
                    Status Proposal:
                    {proposal.status_acc === "Pending" ? (
                      <div className="status">
                        <button className="accept" onClick={handleAccept}>
                          Accept
                        </button>
                        <button className="reject" onClick={handleReject}>
                          Reject
                        </button>
                      </div>
                    ) : proposal.status_acc === "Approved" ? (
                      <div className="status">
                        <button disabled className="accept">
                          Accepted
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
                      {plagiarismMessage ? (
                        plagiarismMessage
                      ) : (
                        "Belum dilakukan"
                      )}
                    </div>
                    <hr />
                    {proposal.status_acc !== "Pending" ? <div className="comment-section">
                      <textarea
                        value={proposal.rejected_note}
                        disabled
                      ></textarea>
                    </div> 
                    : 
                    <div className="comment-section">
                      <textarea
                        placeholder="Berikan Komentar..."
                        value={rejectedNote}
                        onChange={handleNoteChange}
                      ></textarea>
                    </div>}
                   
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading proposal data...</p>
            )}
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
                <button className="btn btn-secondary" type="button" onClick={closeModal}>
                  Ok
                </button>
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

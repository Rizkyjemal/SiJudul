/* eslint-disable eqeqeq */
import { useNavigate, useParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import {
  updatePengajuan,
  checkSimilarity,
  getPengajuanById,
  getAllDosen,
  updateMahasiswaBimbinganDosen,
  getStudentById, // Import function to fetch all advisors
} from "./models/apiCall";

export default function Approval() {
  const { id } = useParams();
  const [, setStatusAcc] = useState("");
  const [rejectedNote, setRejectedNote] = useState("");
  // const [plagiarismResult, setPlagiarismResult] = useState(null); // State for plagiarism check result
  const [plagiarismMessage, setPlagiarismMessage] = useState(null);
  const [proposal, setProposal] = useState();
  const [dosenList, setDosenList] = useState([]); // State to hold list of advisors
  const [dosen2List, setDosen2List] = useState([]); // State to hold list of advisors
  const [selectedDospem1, setSelectedDospem1] = useState("");
  const [selectedDospem2, setSelectedDospem2] = useState("");
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [isAdmin, setIsAdmin] = useState(false); // State to check if user is admin
  let [, setIsKaprodi] = useState(false);
  const [studentDetail, setStudentDetail] = useState();

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;
    setIsAdmin(roles.includes("admin"));
    setIsKaprodi(roles.includes("kaprodi"));

    const fetchProposalAndDosenList = async () => {
      const proposalRes = await getPengajuanById({ id: id });
      setProposal(proposalRes.result);
      setSelectedDospem1(proposalRes.result.dospem1_id);
      setSelectedDospem2(proposalRes.result.dospem2_id);
      console.log(proposalRes?.dospem1_id);
      const dospem = await getAllDosen();
      const filteredDosen = dospem?.result?.filter(
        (dosen) =>
          dosen?.kepakaran == proposalRes?.result?.peminatan ||
          dosen?.id == proposalRes?.result?.dospem1_id ||
          dosen?.id == proposalRes?.result?.dospem2_id
      );
      const filteredDosen2 = dospem?.result?.filter(
        (dosen) =>
          dosen?.jabatan != "Kaprodi" ||
          dosen?.id == proposalRes?.result?.dospem1_id ||
          dosen?.id == proposalRes?.result?.dospem2_id
      );
      console.log(filteredDosen);
      setDosenList(filteredDosen);
      setDosen2List(filteredDosen2);
    };

    // const fetchStudentById = async () => {
    //   console.log("ssss",proposal)
    //   const studentRes = await getStudentById({id:proposal.mahasiswa.id})
    //   setStudentDetail(studentRes);
    // }
    fetchProposalAndDosenList();
    // fetchStudentById();
  }, [id]);

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
    updateProposal("Approved", rejectedNote);
  };

  const handleReject = () => {
    setStatusAcc("Rejected");
    updateProposal("Rejected", rejectedNote);
  };

  const handleNoteChange = (event) => {
    setRejectedNote(event.target.value);
  };

  const handleDospemUpdate = async () => {
    setLoadingUpdate(true);
    try {
      await updateMahasiswaBimbinganDosen(
        {
          dospem1_id: parseInt(selectedDospem1),
          dospem2_id: parseInt(selectedDospem2),
        },
        id
      );
      setLoadingUpdate(false);
      setModalMessage("Berhasil mengupdate dosen pembimbing!");
      setLoginFailed(false);
    } catch (error) {
      setLoadingUpdate(false);
      setModalMessage("Gagal mengupdate dosen pembimbing. Silakan coba lagi.");
      setLoginFailed(true);
    }
    openModal();
  };

  const updateProposal = async (status, note) => {
    try {
      const response = await updatePengajuan({
        id,
        statusAcc: status,
        rejectedNote: note,
        dospem1_id: selectedDospem1,
        dospem2_id: selectedDospem2,
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
      // Pemanggilan fungsi checkSimilarity untuk memeriksa kesamaan judul proposal
      const response = await checkSimilarity({
        judul: proposal.judul, // Mengirim judul proposal
        id: proposal.id, // Mengirim ID proposal
      });

      // Jika ada judul yang mirip ditemukan
      if (response?.similar) {
        // Menyimpan pesan plagiarisme dengan detail judul yang mirip dan persentase kesamaannya
        setPlagiarismMessage(
          `${response?.message} dengan judul "${
            response?.similar
          }" (${response?.similarity.toFixed(2)}%)`
        );
      } else {
        // Menyimpan pesan jika tidak ada judul yang mirip ditemukan
        setPlagiarismMessage(`${response?.message}`);
      }

      console.log("Plagiarism check result:", response);
    } catch (error) {
      console.error("Error checking plagiarism:", error);
    }
  };

  const handleDospem1Change = (event) => {
    setSelectedDospem1(event.target.value);
  };

  const handleDospem2Change = (event) => {
    setSelectedDospem2(event.target.value);
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
                          <strong>Program Studi:</strong>
                          <span>{proposal.mahasiswa.prodi}</span>
                        </div>
                        <div className="info-item">
                          <strong>Dosen Pembimbing 1:</strong>
                          {isAdmin ? (
                            <select
                              value={selectedDospem1}
                              onChange={handleDospem1Change}
                            >
                              {dosenList.map((dosen) => (
                                <option key={dosen.id} value={dosen.id}>
                                  {dosen.name}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <span>{proposal.dospem1.name}</span>
                          )}
                        </div>
                        <div className="info-item">
                          <strong>Dosen Pembimbing 2:</strong>
                          {isAdmin ? (
                            <select
                              value={selectedDospem2}
                              onChange={handleDospem2Change}
                            >
                              {dosen2List.map((dosen) => (
                                <option key={dosen.id} value={dosen.id}>
                                  {dosen.name}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <span>{proposal.dospem2.name}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    {isAdmin && (
                      <button
                        className="btn btn-primary"
                        onClick={handleDospemUpdate}
                        disabled={loadingUpdate}
                      >
                        Update Dosen Pembimbing
                      </button>
                    )}
                    <hr />
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
                      {plagiarismMessage
                        ? plagiarismMessage
                        : "Belum dilakukan"}
                    </div>
                    <hr />
                    {proposal.status_acc !== "Pending" ? (
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
                          value={rejectedNote}
                          onChange={handleNoteChange}
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

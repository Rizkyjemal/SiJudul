import { useParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import { CgDetailsMore } from "react-icons/cg";
import { FaCalendarCheck } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
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
  const [proposal, setProposal] = useState();

  useEffect(() => {
    const fetchProposal = async () => {
      const res = await getPengajuanById({ id: id });
      
      setProposal(res.result[0]);
      // setDosen(res.result);
      console.log(res.result);
    };
    fetchProposal();
  }, []);

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
      console.log("Response from API:", response);
    } catch (error) {
      console.error("Error updating proposal:", error);
    }
  };

  const handlePlagiarismCheck = async () => {
    try {
      const response = await checkSimilarity({
        judul: proposal.judul,
      });
      setPlagiarismResult(response);
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
              skripsi mahasiswa yang sudah di ajukan!
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
                    <div>Detail Pengajuan Judul Proposal Skripsi Mahasiswa</div>
                    <hr />
                    <div>Judul Proposal</div>
                    <div className="proposal-title">
                      <span>{proposal.judul}</span>
                      <button className="" onClick={handlePlagiarismCheck}>
                        Plagiarism Check
                      </button>
                      <hr />
                    </div>
                    <div className="rowrr-custom">
                      <div>Abstrak:</div>
                      <p>{proposal.rumusan_masalah}</p>
                    </div>
                    <div className="rowrr">
                      <FaElementor />
                      <p>{proposal.peminatan}</p>
                      <p>-</p>
                      <p>Software Engineer</p>
                    </div>
                    <div className="rowrr">
                      <MdOutlinePlace />
                      <p>{proposal.tempat_penelitian}</p>
                    </div>
                    <div className="rowrr">
                      <FaCalendarCheck />
                      <p>{proposal.mahasiswa.angkatan}</p>
                    </div>
                    <div className="rowrr">
                      <FaCalendarCheck />
                      <p>{proposal.mahasiswa.prodi}</p>
                    </div>
                    Status Proposal:
                    <div className="status">
                      <button className="accept" onClick={handleAccept}>
                        Accept
                      </button>
                      <button className="reject" onClick={handleReject}>
                        Reject
                      </button>
                    </div>
                    <hr />
                    <div className="plagiarism-check">
                      Plagiarism Check :{" "}
                      {plagiarismResult
                        ? `${plagiarismResult.message} with "${plagiarismResult.similar}" (${plagiarismResult.similarity.toFixed(2)}%)`
                        : "Belum dilakukan"}
                    </div>
                    <hr />
                    <div className="comment-section">
                      <textarea
                        placeholder="Berikan Komentar..."
                        value={rejectedNote}
                        onChange={handleNoteChange}
                      ></textarea>
                    </div>
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
    </div>
  );
}

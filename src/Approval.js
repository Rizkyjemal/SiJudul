import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
export default function Approval() {
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
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Nama Mahasiswa
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div>Detail Pengajuan Judul Proposal Skripsi Mahasiswa</div>
                  <hr></hr>
                  <div>Judul Proposal</div>
                  <div className="proposal-title">
                    <span>
                      Rancang Bangun Aplikasi Pengajuan Proposal Skripsi
                      Mahasiswa
                    </span>
                    <button className="">Plagiarism Check</button>
                    <hr></hr>
                  </div>
                  Status Proposal:
                  <div className="status">
                    <button className="accept">Accept</button>
                    <button className="reject">Reject</button>
                  </div>
                  <hr></hr>
                  <div className="plagiarism-check">
                    Plagiarism Check : Hasil Plagiarism Judul 15%
                  </div>
                  <hr></hr>
                  <div className="comment-section">
                    <textarea placeholder="Berikan Komentar..."></textarea>
                  </div>
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

import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";
import { SiCodementor } from "react-icons/si";
import { Searchbar } from "./Searchbar";
export default function Students() {
  return (
    <div id="wrapper">
      {/* sidebar */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div>
            <img
              className="rounded-circle img-size"
              src="assets/images/logo.jpeg"
            />
          </div>
          <div className="sidebar-brand-text mrr-5"> SiJudul</div>
        </a>
        <hr className="sidebar-divider my-0"></hr>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Management</div>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/proposal">
            <HiOutlineDocumentCheck className="mx-2" />
            Proposals
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/students">
            <PiStudentBold className="mx-2" />
            Student
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/lectures">
            <GiTeacher className="mx-2" />
            Lectures
          </a>
        </li>
        <hr className="sidebar-divider d-none d-md-block"></hr>
      </ul>
      {/* end of sidebar */}

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">Daftar Mahasiswa Bimbingan</h1>
            <p class="mb-4">
              Berikut daftar mahasiswa bimbingan dosen pembimbing:
            </p>
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Rizky Jemal Safryan - 2010511055
                </h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <div></div>
                  <div className="proposal-title">
                    <span>
                      Pembuatan Website Management System Pada Aplikasi
                      Pengajuan Judul Proposal Skripsi Mahasiswa Informatika
                      UPNVJ Menggunakan Teknologi React JS
                    </span>
                    <hr></hr>
                  </div>
                  <div className="rowr">
                    <div className="">
                      <div className="rowrr">
                        <CgDetailsMore />
                        <p>
                          Bagaimana aplikasi pengajuan judul proposal skripsi
                          berbasis mobile dapat meningkatkan efisiensi dalam
                          proses pengajuan judul  di program studi Informatika
                          UPN VeteranJakarta.
                        </p>
                      </div>
                      <div className="rowrr">
                        <SiCodementor />
                        <p>DR.WIDYA CHolil</p>
                      </div>
                      <div className="rowrr">
                        <SiCodementor />
                        <p>DR.WIDYA CHolil</p>
                      </div>
                    </div>
                  </div>

                  <a></a>

                  <div class="comment-section">
                    <textarea placeholder="Berikan Komentar..."></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Rizky Jemal Safryan - 2010511055
                </h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <div></div>
                  <div className="proposal-title">
                    <span>
                      Pembuatan Website Management System Pada Aplikasi
                      Pengajuan Judul Proposal Skripsi Mahasiswa Informatika
                      UPNVJ Menggunakan Teknologi React JS
                    </span>
                    <hr></hr>
                  </div>
                  <div className="rowr">
                    <div className="">
                      <div className="rowrr">
                        <CgDetailsMore />
                        <p>
                          Bagaimana aplikasi pengajuan judul proposal skripsi
                          berbasis mobile dapat meningkatkan efisiensi dalam
                          proses pengajuan judul  di program studi Informatika
                          UPN VeteranJakarta.
                        </p>
                      </div>
                      <div className="rowrr">
                        <SiCodementor />
                        <p>DR.WIDYA CHolil</p>
                      </div>
                      <div className="rowrr">
                        <SiCodementor />
                        <p>DR.WIDYA CHolil</p>
                      </div>
                    </div>
                  </div>

                  <a></a>

                  <div class="comment-section">
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

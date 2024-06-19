import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";
import { SiCodementor } from "react-icons/si";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
export default function Students() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">Daftar Mahasiswa Bimbingan</h1>
            <p class="mb-4">Berikut list daftar mahasiswa bimbingan:</p>
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

import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";
import { SiCodementor } from "react-icons/si";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import { getAllStudents } from "./models/apiCall";
import { useEffect, useState } from "react";
export default function Students() {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllStudents();
      console.log(res);
      setMahasiswa(res.result);
    };
    fetchData();
  }, []);

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">
              Daftar Mahasiswa Bimbingan
            </h1>
            <p className="mb-4">Berikut list daftar mahasiswa bimbingan:</p>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Rizky Jemal Safryan - 2010511055
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
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
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Rizky Jemal Safryan - 2010511055
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
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

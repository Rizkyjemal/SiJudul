import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { getAllAdmin, getAllDosen } from "./models/apiCall";
import { useEffect, useState } from "react";

export default function Lectures() {
  const [count, setCount] = useState("");
  const [dosen, setDosen] = useState([]);

  // This useEffect runs once after the initial render
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllDosen()
      setDosen(res.result)
    }
    fetchData()
  }, []);

  console.log(dosen)

  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">
              Data Dosen Pembimbing Proposal Skripsi
            </h1>
            <p class="mb-4">
              Halaman ini berisi list Dosen Pembimbing Proposal Skripsi yang
              tersedia untuk membimbing mahasiswa semester ini.
            </p>

            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Data Dosen Pembimbing
                </h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Nama Dosen</th>
                        <th>Posisi/Jabatan</th>
                        <th>Email</th>
                        <th>NIDN</th>
                        <th>Kapasitas Bimbingan</th>
                        <th>Program Studi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dosen?.map((item, index) => (
                      <tr>
                        <td>{item?.name}</td>
                        <td>Dosen {item?.jabatan}</td>
                        <td>{item?.email}</td>
                        <td>{item?.nidn}</td>
                        <td>{item?.kapasitas}</td>
                        <td>{item?.prodi}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
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

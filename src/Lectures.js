import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { getAllAdmin } from "./models/apiCall";
import { useEffect, useState } from "react";

export default function Lectures() {
  const [count, setCount] = useState("");

  // This useEffect runs once after the initial render
  useEffect(() => {
    console.log(getAllAdmin());
    // This is the cleanup function, runs before the component unmounts
    return () => {
      console.log("Component will unmount");
    };
  }, []);
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
                    <tfoot>
                      <tr>
                        <th>Nama Dosen</th>
                        <th>Posisi/Jabatan</th>
                        <th>Email</th>
                        <th>NIDN</th>
                        <th>Kapasitas Bimbingan</th>
                        <th>Program Studi</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Dr. Widya Cholil, S.Kom., M.I.T.</td>
                        <td>Dosen S1 Informatika / Kaprodi S1 Informatika</td>
                        <td>widyacholil@gmail.com</td>
                        <td>221112080</td>
                        <td>10</td>
                        <td>Informatika</td>
                      </tr>
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

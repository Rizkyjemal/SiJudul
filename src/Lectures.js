import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
export default function Lectures() {
  return (
    <div id="wrapper">
      {/* sidebar */}
      <Sidebar />
      {/* end of sidebar */}

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
                        <th>Nomor Induk</th>
                        <th>Kapasitas Bimbingan</th>
                        <th>No Telepon</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Nama Dosen</th>
                        <th>Posisi/Jabatan</th>
                        <th>Nomor Induk</th>
                        <th>Kapasitas Bimbingan</th>
                        <th>No Telepon</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Dr. Widya Cholil, S.Kom., M.I.T.</td>
                        <td>Dosen S1 Informatika / Kaprodi S1 Informatika</td>
                        <td>221112080</td>
                        <td>10</td>
                        <td>+62 895-3206-97542</td>
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

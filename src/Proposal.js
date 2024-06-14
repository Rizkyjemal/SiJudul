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
              Daftar Pengajuan Judul Proposal Mahasiswa
            </h1>
            <p class="mb-4">
              Halaman ini berisi list daftar pengajuan judul proposal mahasiswa
              Informatika.
            </p>

            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Daftar Ajuan Judul Proposal
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
                        <th>Nama Mahasiswa</th>
                        <th>NIM</th>
                        <th>Judul Proposal</th>
                        <th>Status Pengajuan</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Nama Mahasiswa</th>
                        <th>NIM</th>
                        <th>Judul Proposal</th>
                        <th>Status Pengajuan</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Rizky Jemal</td>
                        <td>2010511055</td>
                        <td>
                          Pembuatan Website Management System Pada Aplikasi
                          Pengajuan Judul Proposal Skripsi Mahasiswa Informatika
                          UPNVJ Menggunakan Teknologi React JS
                        </td>
                        {/* <div className="danger"> */}
                        <td className="bg-success text-white">ACCEPTED</td>
                        {/* </div> */}
                      </tr>
                      <tr>
                        <td>Rizky Jemal</td>
                        <td>2010511055</td>
                        <td>
                          Pembuatan Website Management System Pada Aplikasi
                          Pengajuan Judul Proposal Skripsi Mahasiswa Informatika
                          UPNVJ Menggunakan Teknologi React JS
                        </td>
                        <td className="bg-danger text-white">REJECTED</td>
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

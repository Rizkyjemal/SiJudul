import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
export default function Edit() {
  return (
    <div id="wrapper">
      <Sidebar />
      {/* end of sidebar */}

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">Edit Data Dosen Pembimbing</h1>
            <p class="mb-4">Isi Data Dosen Pembimbing Yang Ingin Di Edit!</p>
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Isi Form Data Dosen Dengan Benar!
                </h6>
              </div>
              <form>
                <div class="card-body">
                  <div class="table-responsive">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Nama..."
                        type="text"
                        // class="form-control-file"
                        id="exampleFormControlFile1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="NIDN..."
                        type="text"
                        // class="form-control-file"
                        id="exampleFormControlFile1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password..."
                        type="text"
                        // class="form-control-file"
                        id="exampleFormControlFile1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Email..."
                        type="text"
                        // class="form-control-file"
                        className="form-control"
                        id="exampleFormControlFile1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Jabatan..."
                        type="text"
                        // class="form-control-file"
                        className="form-control"
                        id="exampleFormControlFile1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Program Studi..."
                        type="text"
                        // class="form-control-file"
                        className="form-control"
                        id="exampleFormControlFile1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Kapasitas Dosen..."
                        type="text"
                        // class="form-control-file"
                        className="form-control"
                        id="exampleFormControlFile1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Keahlian..."
                        type="text"
                        // class="form-control-file"
                        className="form-control"
                        id="exampleFormControlFile1"
                      ></input>
                    </div>
                    <div class="submit">
                      <button>SUBMIT</button>
                    </div>
                  </div>
                </div>
              </form>
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

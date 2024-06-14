import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
export default function Penambahan() {
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
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn bg-gradient-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              <li className="nav-item dropdown no-arrow mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="alertsDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell fa-fw"></i>
                  <span className="badge badge-danger badge-counter">3+</span>
                </a>
                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown"
                >
                  <h6 className="dropdown-header">Alerts Center</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 12, 2019
                      </div>
                      <span className="font-weight-bold">
                        A new monthly report is ready to download!
                      </span>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 7, 2019
                      </div>
                      $290.29 has been deposited into your account!
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 2, 2019
                      </div>
                      Spending Alert: We've noticed unusually high spending for
                      your account.
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Show All Alerts
                  </a>
                </div>
              </li>

              <div className="topbar-divider d-none d-sm-block"></div>
              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Rizky Jemal
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>

                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">
              Penambahan Data Dosen Pembimbing
            </h1>
            <p class="mb-4">
              Isi Data Dosen Pembimbing Yang Ingin Ditambahkan!
            </p>
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

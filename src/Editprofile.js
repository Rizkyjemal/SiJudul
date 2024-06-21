import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

export default function Editprofile() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Searchbar />
            <div className="container">
              <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="account-settings">
                        <div className="user-profile">
                          <div className="user-avatar centered">
                            <img
                              src="assets/images/logo.png"
                              alt="Maxwell Admin"
                            />
                          </div>
                          <br></br>
                          <h5 className="user-name text-center">Rizky Jemal</h5>
                          <h6 className="user-email text-center">
                            rizkyjemal@gmail.com
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mb-2 text-primary">
                            Personal Details
                          </h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              placeholder="Enter full name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="eMail">NIDN</label>
                            <input
                              type="email"
                              className="form-control"
                              id="eMail"
                              placeholder="Enter email ID"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="phone">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="website">Program Studi</label>
                            <input
                              type="url"
                              className="form-control"
                              id="website"
                              placeholder="Website url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="Street">Kapasitas Bimbingan</label>
                            <input
                              type="name"
                              className="form-control"
                              id="Street"
                              placeholder="Enter Street"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="ciTy">Kepakaran</label>
                            <input
                              type="name"
                              className="form-control"
                              id="ciTy"
                              placeholder="Enter City"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="text-right">
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-secondary"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-primary"
                            >
                              Update
                            </button>
                          </div>
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
    </>
  );
}

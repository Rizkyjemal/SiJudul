import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
export default function Edit() {
  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div class="container">
            <div class="row gutters">
              <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="account-settings">
                      <div class="user-profile">
                        <div class="user-avatar centered">
                          <img
                            src="assets/images/logo.png"
                            alt="Maxwell Admin"
                          />
                        </div>
                        <br></br>
                        <h5 class="user-name text-center">Rizky Jemal</h5>
                        <h6 class="user-email text-center">
                          rizkyjemal@gmail.com
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">Personal Details</h6>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="fullName">Full Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fullName"
                            placeholder="Enter full name"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="eMail">NIDN</label>
                          <input
                            type="email"
                            class="form-control"
                            id="eMail"
                            placeholder="Enter email ID"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="phone">Email</label>
                          <input
                            type="text"
                            class="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="website">Program Studi</label>
                          <input
                            type="url"
                            class="form-control"
                            id="website"
                            placeholder="Website url"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row gutters">
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="Street">Kapasitas Bimbingan</label>
                          <input
                            type="name"
                            class="form-control"
                            id="Street"
                            placeholder="Enter Street"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="ciTy">Kepakaran</label>
                          <input
                            type="name"
                            class="form-control"
                            id="ciTy"
                            placeholder="Enter City"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            class="btn btn-secondary"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            class="btn btn-primary"
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
  );
}

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { getProfileDosen } from "./models/apiCall";

export default function Edit() {
  const [dosenData, setDosenData] = useState({
    fullName: "",
    nidn: "",
    email: "",
    programStudi: "",
    kapasitasBimbingan: "",
    kepakaran: "",
    image: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const id = window.location.pathname.split("/").pop();
      const data = await getProfileDosen({ id });
      setDosenData({
        fullName: data.name,
        nidn: data.nidn,
        email: data.email,
        programStudi: data.programStudi,
        kapasitasBimbingan: data.kapasitasBimbingan,
        kepakaran: data.kepakaran,
        image: data.image
      });
    };

    fetchData();
  }, []);

  console.log(dosenData)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDosenData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
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
                            src={dosenData.image}
                            alt="Maxwell Admin"
                          />
                        </div>
                        <br />
                        <h5 className="user-name text-center">{dosenData.fullName}</h5>
                        <h6 className="user-email text-center">{dosenData.email}</h6>
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
                        <h6 className="mb-2 text-primary">Personal Details</h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            value={dosenData.fullName}
                            onChange={handleChange}
                            placeholder="Enter full name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="nidn">NIDN</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nidn"
                            value={dosenData.nidn}
                            onChange={handleChange}
                            placeholder="Enter NIDN"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={dosenData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="programStudi">Program Studi</label>
                          <input
                            type="text"
                            className="form-control"
                            id="programStudi"
                            value={dosenData.programStudi}
                            onChange={handleChange}
                            placeholder="Enter Program Studi"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="kapasitasBimbingan">Kapasitas Bimbingan</label>
                          <input
                            type="text"
                            className="form-control"
                            id="kapasitasBimbingan"
                            value={dosenData.kapasitasBimbingan}
                            onChange={handleChange}
                            placeholder="Enter Kapasitas Bimbingan"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="kepakaran">Kepakaran</label>
                          <input
                            type="text"
                            className="form-control"
                            id="kepakaran"
                            value={dosenData.kepakaran}
                            onChange={handleChange}
                            placeholder="Enter Kepakaran"
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
  );
}

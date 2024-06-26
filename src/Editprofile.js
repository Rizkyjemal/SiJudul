import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import { editProfile, getProfileDosen } from "./models/apiCall";

export default function Editprofile() {
  const [profile, setProfile] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const fetchData = async () => {
      const res = await getProfileDosen({ id: authObject.data.id });
      setProfile(res);
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // console.log(id,value)
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = async (e) => {
    // console.log(profile.name,"ihiihi");
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const response = await editProfile({id:authObject.data.id,email:profile.email,kepakaran:profile.kepakaran,name:profile.name,nidn:profile.nidn,prodi:profile.prodi});
    // console.log(response,"berhasil updateeee")
    if (response.result) {
      setModalMessage("Berhasil Mengubah Profile!");
    } else {
      setModalMessage("Gagal Mengubah Profile! Silakan Coba Lagi");
    }
    openModal();
  }
  
  return (
    <>
    {/* {console.log(profile,"profff")} */}
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
                          <br />
                          {/* <h5 className="user-name text-center">Rizky Jemal</h5>
                          <h6 className="user-email text-center">
                            rizkyjemal@gmail.com
                          </h6> */}
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
                              id="name"
                              placeholder="Enter full name"
                              value={profile.name || ""}
                              onChange={handleInputChange}
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
                              placeholder="Enter NIDN"
                              value={profile.nidn || ""}
                              onChange={handleInputChange}
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
                              placeholder="Enter Email"
                              value={profile.email || ""}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="prodi">Program Studi</label>
                            <select
                              className="form-control"
                              id="prodi"
                              value={profile.prodi || ""}
                              onChange={handleInputChange}
                            >
                              <option value="Informatika">Informatika</option>
                              <option value="Sistem Informasi">Sistem Informasi</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="kepakaran">Kepakaran</label>
                            <select
                              className="form-control"
                              id="kepakaran"
                              value={profile.kepakaran || ""}
                              onChange={handleInputChange}
                            >
                              <option value="IT Security Specialist">IT Security Specialist</option>
                              <option value="Data Scientist">Data Scientist</option>
                              <option value="Software Engineer">Software Engineer</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="text-right">
                            <button
                              type="button"
                              id="cancel"
                              name="cancel"
                              className="btn btn-secondary"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-primary"
                              onClick={handleSubmit}
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
      {isModalVisible && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalApprovalLabel"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalApprovalLabel">
                  Pengajuan
                </h5>
                <button className="close" type="button" onClick={closeModal}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{modalMessage}</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" onClick={closeModal}>
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

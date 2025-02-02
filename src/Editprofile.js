/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { editProfile, getProfileDosen } from "./models/apiCall";

export default function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    nidn: "",
    email: "",
    prodi: "",
    gelar: "",
    jenjang_akademik: "",
    kepakaran: "",
  });
  const [isKaprodi, setIsKaprodi] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const fetchData = async () => {
      const res = await getProfileDosen({ id: authObject.data.id });
      setProfile(res);
      setIsPageLoading(false); // Set loading to false after data is fetched
    };
    fetchData();

    // Check if user is Kaprodi
    setIsKaprodi(authObject.roles.includes("kaprodi"));
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const closeModal = () => {
    setIsModalVisible(false);
    if (isUpdateSuccessful) {
      navigate("/profile");
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = async () => {
    setIsUpdateLoading(true);
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const response = await editProfile(authObject.data.id, {
      email: profile.email,
      kepakaran: profile.kepakaran,
      name: profile.name,
      nidn: profile.nidn,
      prodi: profile.prodi,
      kapasitas: parseInt(profile.kapasitasBimbingan),
      gelar: profile.gelar,
      jenjang_akademik: profile.jenjang_akademik,
      no_telp: profile.no_telp,
    });
    setIsUpdateLoading(false);
    if (response.result) {
      setModalMessage("Berhasil Mengubah Profile!");
      setIsUpdateSuccessful(true);
    } else {
      setModalMessage("Gagal Mengubah Profile! Silakan Coba Lagi");
      setIsUpdateSuccessful(false);
    }
    openModal();
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <>
      {isPageLoading || isUpdateLoading ? (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalLoadingLabel"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLoadingLabel">
                  Loading
                </h5>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
                              <img src={profile.image} alt="Image" />
                            </div>
                            <br />
                            <h5 className="user-name text-center">
                              {profile.name}
                            </h5>
                            <h6 className="user-email text-center">
                              {profile.nidn}
                            </h6>
                            <p className="text-center">
                              Universitas Pembangunan Nasional Veteran Jakarta
                            </p>
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
                              <label htmlFor="name">Nama Lengkap</label>
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
                                <option value="Sarjana Informatika">
                                  Sarjana Informatika
                                </option>
                                <option value="Sarjana Sistem Informasi">
                                  Sarjana Sistem Informasi
                                </option>
                                <option value="Diploma Sistem Informasi">
                                  Diploma Sistem Informasi
                                </option>
                              </select>
                            </div>
                          </div>

                          {isKaprodi && (
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label htmlFor="kapasitasBimbingan">
                                  Kapasitas Bimbingan
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="kapasitasBimbingan"
                                  value={profile.kapasitasBimbingan}
                                  onChange={handleInputChange}
                                  placeholder="Enter Kapasitas Bimbingan"
                                />
                              </div>
                            </div>
                          )}
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label htmlFor="gelar">Gelar</label>
                              <input
                                type="text"
                                className="form-control"
                                id="gelar"
                                placeholder=""
                                value={profile.gelar || ""}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label htmlFor="jenjang_akademik">
                                Jenjang Akademik
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="jenjang_akademik"
                                placeholder="..."
                                value={profile.jenjang_akademik || ""}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label htmlFor="kepakaran">Kepakaran</label>
                              <select
                                className="form-control"
                                id="kepakaran"
                                value={profile.kepakaran || ""}
                                onChange={handleInputChange}
                              >
                                <option value="IT Security Specialist">
                                  IT Security Specialist
                                </option>
                                <option value="Data Scientist">
                                  Data Scientist
                                </option>
                                <option value="Software Engineer">
                                  Software Engineer
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label htmlFor="no_telp">Nomor Telepon</label>
                              <input
                                type="text"
                                className="form-control"
                                id="no_telp"
                                value={profile.no_telp}
                                onChange={handleInputChange}
                                placeholder="Enter Nomor Telepon"
                              />
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
                                onClick={handleCancel}
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

            <Footer />
          </div>
        </div>
      )}

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
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={closeModal}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </>
  );
}

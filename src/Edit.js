import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { editProfile, getProfileDosen, deleteDosen } from "./models/apiCall";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isKaprodi, setIsKaprodi] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const [dosenData, setDosenData] = useState({
    fullName: "",
    nidn: "",
    email: "",
    programStudi: "",
    kapasitasBimbingan: "",
    kepakaran: "",
    image: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;
    setIsKaprodi(roles.includes("kaprodi"));
    setIsAdmin(roles.includes("admin"));

    const fetchData = async () => {
      const id = window.location.pathname.split("/").pop();
      const data = await getProfileDosen({ id });
      // console.log(data,"dattt")
      setDosenData({
        fullName: data.name,
        nidn: data.nidn,
        email: data.email,
        programStudi: data.prodi,
        kapasitasBimbingan: data.kapasitas,
        kepakaran: data.kepakaran,
        image: data.image,
      });
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDosenData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const id = window.location.pathname.split("/").pop();
    const response = await editProfile({
      id: id,
      email: dosenData.email,
      kepakaran: dosenData.kepakaran,
      name: dosenData.fullName,
      nidn: dosenData.nidn,
      prodi: dosenData.programStudi,
      kapasitas: parseInt(dosenData.kapasitasBimbingan),
    });
    if (response.result) {
      setModalMessage("Berhasil Mengubah Profile!");
    } else {
      setModalMessage("Gagal Mengubah Profile! Silakan Coba Lagi");
    }
    openModal();
  };

  const handleDelete = async () => {
    const id = window.location.pathname.split("/").pop();
    const response = await deleteDosen(id);
    if (response.result) {
      setModalMessage("Berhasil Menghapus Data Dosen!");
    } else {
      setModalMessage("Gagal Menghapus Data Dosen! Silakan Coba Lagi");
    }
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    navigate("/lectures");
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
                          <img src={dosenData.image} alt="Maxwell Admin" />
                        </div>
                        <br />
                        <h5 className="user-name text-center">
                          {dosenData.fullName}
                        </h5>
                        <h6 className="user-email text-center">
                          {dosenData.email}
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
                        <h6 className="mb-2 text-primary">Personal Details</h6>
                      </div>
                      {isAdmin && (
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
                      )}
                      {isAdmin && (
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
                      )}

                      {isAdmin && (
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
                      )}

                      {isAdmin && (
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
                      )}
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="kapasitasBimbingan">
                            Kapasitas Bimbingan
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="kapasitasBimbingan"
                            value={dosenData.kapasitasBimbingan}
                            onChange={handleChange}
                            placeholder="Enter Kapasitas Bimbingan"
                          />
                        </div>
                      </div>
                      {isAdmin && (
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
                      )}
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          {!isKaprodi && (
                            <button
                              type="button"
                              id="delete"
                              name="delete"
                              className="btn btn-danger"
                              onClick={handleDelete}
                            >
                              Delete Dosen
                            </button>
                          )}
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-secondary"
                            onClick={() => navigate(-1)}
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
    </div>
  );
}

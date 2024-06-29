import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { useState } from "react";
import { createDosen } from "./models/apiCall";
import { useNavigate } from "react-router-dom";

export default function Tambahdosen() {
  const [formData, setFormData] = useState({
    name: "",
    nidn: "",
    email: "",
    prodi: "Sarjana Informatika",
    kapasitas: "",
    kepakaran: "IT Security Specialist",
    gelar : "",
    jenjang_akademik: "",
    no_telp: "",
    jabatan: "Dosen",
    password: "",
  });

  console.log(formData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "image") {
      value = e.target.files[0];
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setIsModalVisible(false);
    navigate("/lectures");
  };

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalVisible(true);
  };

  const handleSubmit = async () => {
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    const response = await createDosen(form);
    if (response.result) {
      openModal("Berhasil Menambahkan Data Dosen!");
    } else {
      openModal("Gagal Menambahkan Data Dosen! Silakan Coba Lagi");
    }
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
                            src="assets/images/profile.png"
                            alt="Maxwell Admin"
                          />
                        </div>
                        <br />
                        <h5 className="user-name text-center">Nama Lengkap</h5>
                        <h6 className="user-email text-center">email</h6>
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
                          Isi data dosen dengan benar!
                        </h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="fullName">Nama Lengkap</label>
                          <input
                            type="text"
                            onChange={handleChange}
                            value={formData.name}
                            name="name"
                            className="form-control"
                            id="fullName"
                            placeholder="..."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="eMail">NIDN</label>
                          <input
                            type="text"
                            onChange={handleChange}
                            value={formData.nidn}
                            name="nidn"
                            className="form-control"
                            id="eMail"
                            placeholder="..."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="phone">Email</label>
                          <input
                            type="text"
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                            className="form-control"
                            id="phone"
                            placeholder="..."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="jabatan">Tanggal Lahir</label>
                          <input
                            type="text"
                            onChange={handleChange}
                            value={formData.tanggal_lahir}
                            name="kapasitas"
                            className="form-control"
                            id="Street"
                            placeholder="YYYY-MM-DD"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Street">Gelar</label>
                          <input
                            type="text"
                            onChange={handleChange}
                            value={formData.gelar}
                            name="gelar"
                            className="form-control"
                            id="Street"
                            placeholder="..."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Street">Jenjang Akademik</label>
                          <input
                            type="text"
                            onChange={handleChange}
                            value={formData.jenjang_akademik}
                            name="jenjang_akademik"
                            className="form-control"
                            id="Street"
                            placeholder="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="jabatan">Jabatan</label>
                          <select
                            className="form-control"
                            id="jabatan"
                            name="jabatan"
                            value={formData.jabatan}
                            onChange={handleChange}
                          >
                            <option value="Dosen">Dosen</option>
                            <option value="Kaprodi">Kaprodi</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Street">Kapasitas Bimbingan</label>
                          <input
                            type="number"
                            onChange={handleChange}
                            value={formData.kapasitas}
                            name="kapasitas"
                            className="form-control"
                            id="Street"
                            placeholder="..."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="prodi">Program Studi</label>
                          <select
                            className="form-control"
                            id="prodi"
                            name="prodi"
                            value={formData.prodi}
                            onChange={handleChange}
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
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="kepakaran">Kepakaran</label>
                          <select
                            className="form-control"
                            id="kepakaran"
                            name="kepakaran"
                            value={formData.kepakaran}
                            onChange={handleChange}
                          >
                            <option value="IT Security Specialist">
                              IT Security Specialist
                            </option>
                            <option value="Network Engineer">
                              Network Engineer
                            </option>
                            <option value="Software Engineer">
                              Software Engineer
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Street">Nomor Telepon</label>
                          <input
                            onChange={handleChange}
                            value={formData.no_telp}
                            name="no_telp"
                            className="form-control"
                            id="Street"
                            placeholder="..."
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Street">Password</label>
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            className="form-control"
                            id="Street"
                            placeholder="GsdXvcSHdah3"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="image">Upload Image</label>
                          <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="form-control"
                            id="image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <button
                            type="button"
                            name="submit"
                            onClick={handleSubmit}
                            className="btn btn-primary"
                          >
                            Add
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

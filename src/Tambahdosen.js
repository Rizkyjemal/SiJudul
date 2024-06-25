import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { useState } from "react";
import { requestWithHeaders } from "./models/requestMethod";
import { createDosen } from "./models/apiCall";
export default function Tambahdosen() {

  const [formData, setFormData] = useState({
    name: '',
    nidn: '',
    email: '',
    prodi: '',
    kapasitas: '',
    kepakaran: '',
    jabatan: '',
    password: '',
    // image: null
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    // if (name == "kapasitas") {
    //   value = parseInt(value, 10)
    // }
    if (name === "image") {
      value = e.target.files[0];
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async () => {
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    await createDosen(form);
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
                            placeholder="Chordan Aksa Priandoyo"
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
                            placeholder="1306078702"
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
                            placeholder="chordan345@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="website">Program Studi</label>
                          <input
                            type="url"
                            name="prodi"
                            onChange={handleChange}
                            value={formData.prodi}
                            className="form-control"
                            id="website"
                            placeholder="S1 Informatika"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
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
                            placeholder="10"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="ciTy">Kepakaran</label>
                          <input
                            type="name"
                            onChange={handleChange}
                            value={formData.kepakaran}
                            name="kepakaran"
                            className="form-control"
                            id="ciTy"
                            placeholder="Software Engineering"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Street">Jabatan</label>
                          <input
                            type="name"
                            name="jabatan"
                            onChange={handleChange}
                            value={formData.jabatan}
                            className="form-control"
                            id="Street"
                            placeholder="Dosen"
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
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
    </div>
  );
}

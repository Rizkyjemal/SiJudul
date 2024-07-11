/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { getProfileDosen } from "./models/apiCall";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;
    setIsAdmin(roles.includes("admin"));
    const fetchData = async () => {
      const res = await getProfileDosen({ id: authObject.data.id });
      setProfile(res);
      setIsPageLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, []);

  return (
    <>
      {isPageLoading ? (
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
        profile && (
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Searchbar />
                {!isAdmin ? (
                  <>
                    <div className="card-profile">
                      <img src={profile.image} alt="Profile Image" />
                      <h2>{profile.name}</h2>
                      <p>{profile.jabatan}</p>
                      <p>Universitas Pembangunan Nasional Veteran Jakarta</p>
                    </div>

                    <div className="details-profile">
                      <table>
                        <tbody>
                          <tr>
                            <td>NIDN</td>
                            <td>{profile.nidn}</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>{profile.email}</td>
                          </tr>
                          <tr>
                            <td>Program Studi</td>
                            <td>{profile.prodi}</td>
                          </tr>
                          <tr>
                            <td>Kepakaran</td>
                            <td>{profile.kepakaran}</td>
                          </tr>
                          <tr>
                            <td>Kapasitas Bimbingan</td>
                            <td>{profile.kapasitas}</td>
                          </tr>
                          <tr>
                            <td>Total Mahasiswa Bimbingan</td>
                            <td>{profile.mahasiswa_bimbingan_id.length}</td>
                          </tr>
                          <tr>
                            <td>Gelar</td>
                            <td>{profile.gelar}</td>
                          </tr>
                          <tr>
                            <td>Jenjang Akademik</td>
                            <td>{profile.jenjang_akademik}</td>
                          </tr>
                          <tr>
                            <td>Nomor Telepon</td>
                            <td>{profile.no_telp}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="centered">
                        <a href="/editprofile">
                          <button>Edit Profile</button>
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="card-profile">
                    <h2>ADMIN</h2>
                    <p>Universitas Pembangunan Nasional Veteran Jakarta</p>
                  </div>
                )}
              </div>

              <Footer />
            </div>
          </div>
        )
      )}
    </>
  );
}

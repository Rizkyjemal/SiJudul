import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import { getProfileDosen } from "./models/apiCall";
export default function Profile() {
  const [profile, setProfile] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
   
      const jsonString = localStorage.getItem("auth");
      const authObject = JSON.parse(jsonString);
      const roles = authObject.roles;
      setIsAdmin(roles.includes("admin"));
      console.log(authObject,"id");
      const fetchData = async () => {
      const res = await getProfileDosen({ id: authObject.data.id });
      // console.log(res)
      setProfile(res);
      // console.log(res)
    };
    fetchData();
  }, []);
  return (
    <>
    {/* {console.log(profile,"adadd")} */}
    {profile && (<div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Searchbar />
             {!isAdmin ? (
              <>
                <div className="card-profile">
                  <img src="assets/images/logo.png" alt="Profile Image" />
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
                {/* <img src="assets/images/logo.png" alt="Profile Image" /> */}
                <h2>ADMIN</h2>
                {/* <p>{profile.email}</p> */}
                <p>Universitas Pembangunan Nasional Veteran Jakarta</p>
              </div>
            )
             }
            
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; SiJudul - UPN Veteran Jakarta 2024</span>
              </div>
            </div>
          </footer>
        </div>
      </div>)}
      

      
    </>
  );
}

import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import { getProfileDosen } from "./models/apiCall";
export default function Profile() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    console.log(auth, "ii");
    // const fetchData = async () => {
    //   const res = await getProfileDosen({ id: auth.data.id });
    //   console.log(res, "uhuyyy");
    //   // setDosen(res.result);
    // };
    // fetchData();
  }, []);
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Searchbar />
            <div className="card-profile">
              <img src="assets/images/logo.png" alt="Profile Image" />
              <h2>Dr.Widya Cholil</h2>
              <p>Kepala Program Studi Informatika UPNVJ</p>
              <p>Universitas Pembangunan Nasional Veteran Jakarta</p>
            </div>

            <div className="details-profile">
              <table>
                <tbody>
                  <tr>
                    <td>NIDN</td>
                    <td>012345678</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>widyacholil@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Program Studi</td>
                    <td>Informatika</td>
                  </tr>
                  <tr>
                    <td>Kepakaran</td>
                    <td>Data Science</td>
                  </tr>
                  <tr>
                    <td>Kapasitas Bimbingan</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Total Mahasiswa Bimbingan</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
              <div className="centered">
                <a href="/editprofile">
                  <button>Edit Profile</button>
                </a>
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

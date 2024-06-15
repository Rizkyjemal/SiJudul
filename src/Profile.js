import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
export default function Profile() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Searchbar />
            <div class="card-profile">
              <img src="assets/images/logo.png" alt="Profile Image" />
              <h2>John Smith</h2>
              <p>Full Stack Developer</p>
              <p>Bay Area, San Francisco, CA</p>
            </div>

            <div class="details-profile">
              <table>
                <tr>
                  <td>Full Name</td>
                  <td>Johnatan Smith</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>example@example.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>(097) 234-5678</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>(098) 765-4321</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Bay Area, San Francisco, CA</td>
                </tr>
              </table>
              <div className="centered">
                <button>Edit Profile</button>
              </div>
              <div className="centered">
                <button>Logout</button>
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

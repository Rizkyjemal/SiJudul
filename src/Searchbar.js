import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getProfileDosen } from "./models/apiCall";
import moment from "moment";

export default function Searchbar() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);

    const fetchData = async () => {
      const res = await getProfileDosen({ id: authObject.data.id });
      setProfile(res);
    };
    fetchData();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    document.getElementById("cancelBtn").click();
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            {profile && (
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  className="mr-2 d-none d-lg-inline text-gray-600 small"
                  style={{ fontWeight: "bold" }}
                >
                  {profile.name}
                </span>
                <img
                  className="img-profile rounded-circle"
                  src={profile.image}
                  alt="Profile"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
            )}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="/profile">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
                id="cancelBtn"
              >
                Cancel
              </button>
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

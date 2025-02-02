import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { GrStatusGood } from "react-icons/gr";
import { useEffect, useState } from "react";
// import { getAllStudents } from "./models/apiCall";
export default function Sidebar() {
  let [isAdmin, setIsAdmin] = useState(false);
  let [isKaprodi, setIsKaprodi] = useState(false);
  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);

    const roles = authObject.roles;
    setIsAdmin(roles.includes("admin"));
    setIsKaprodi(roles.includes("kaprodi"));
  }, []);
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div>
            <img
              alt="logo"
              className="rounded-circle img-size"
              src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`}
            />
          </div>
          <div className="sidebar-brand-text mrr-5"> SiJudul</div>
        </a>
        <hr className="sidebar-divider my-0"></hr>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Management</div>
        <li className="nav-item active">
          <a className="nav-link collapsed" href="/proposal">
            <HiOutlineDocumentCheck className="mx-2" />
            Proposal
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link collapsed" href="/students">
            <PiStudentBold className="mx-2" />
            Mahasiswa
          </a>
        </li>
        {isAdmin || isKaprodi ? (
          <li className="nav-item active">
            <a className="nav-link collapsed" href="/lectures">
              <GiTeacher className="mx-2" />
              Dosen Pembimbing
            </a>
          </li>
        ) : (
          <div></div>
        )}

        {isKaprodi ? (
          <li className="nav-item active">
            <a className="nav-link collapsed" href="/approval-kaprodi">
              <GrStatusGood className="mx-2" />
              Approval Kaprodi
            </a>
          </li>
        ) : (
          <div></div>
        )}

        <hr className="sidebar-divider d-none d-md-block"></hr>
      </ul>
    </>
  );
}

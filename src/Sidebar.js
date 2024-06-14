import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
export default function Sidebar() {
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
              className="rounded-circle img-size"
              src="assets/images/logo.jpeg"
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
        <li className="nav-item">
          <a className="nav-link collapsed" href="/proposal">
            <HiOutlineDocumentCheck className="mx-2" />
            Proposals
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/students">
            <PiStudentBold className="mx-2" />
            Student
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/lectures">
            <GiTeacher className="mx-2" />
            Lectures
          </a>
        </li>
        <hr className="sidebar-divider d-none d-md-block"></hr>
      </ul>
    </>
  );
}

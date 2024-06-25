import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";
import { SiCodementor } from "react-icons/si";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import { getAllStudents, getAllStudentsBimbingan } from "./models/apiCall";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const userId = authObject.data.id;

    const roles = authObject.roles;
    const isAdmin = roles.includes("admin");

    const fetchData = async () => {
      if (isAdmin) {
        const res = await getAllStudents();
        setMahasiswa(res.result);
      } else {
        const res = await getAllStudentsBimbingan({ id: userId });
        setMahasiswa(res.mahasiswa_list);
      }
    };
    fetchData();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/detailstudent/${id}`);
  };

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">
              Daftar Mahasiswa Bimbingan
            </h1>
            <p className="mb-4">Berikut list daftar mahasiswa bimbingan:</p>
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Nama Mahasiswa</th>
                        <th>NIM</th>
                        <th>Program Studi</th>
                        <th>Angkatan</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mahasiswa?.map((item, index) => (
                        <tr
                          key={index}
                          className="clickable-row"
                          onClick={() => handleRowClick(item?.id)}
                        >
                          <td>{item.name}</td>
                          <td>{item.nim}</td>
                          <td>{item.prodi}</td>
                          <td>{item.angkatan}</td>
                          <td>{item.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
      <style jsx>{`
        .clickable-row {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

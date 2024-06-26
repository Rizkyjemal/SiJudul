import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";
import { SiCodementor } from "react-icons/si";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";
import { deleteStudent, getAllStudents, getAllStudentsBimbingan } from "./models/apiCall";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();
  const [mahasiswa, setMahasiswa] = useState([]);
  const [allMahasiswa, setAllMahasiswa] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  let [isKaprodi, setIsKaprodi] = useState(false);

  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);
    const roles = authObject.roles;

    setIsKaprodi(roles.includes("kaprodi"));
    setIsAdmin(roles.includes("admin"));

    fetchData(roles.includes("kaprodi"), roles.includes("admin"));
  }, []);

  const fetchData = async (isKaprodi, isAdmin) => {
    const jsonString = localStorage.getItem("auth");
    const authObject = JSON.parse(jsonString);

    const userId = authObject.data.id;

    if (isAdmin) {
      const res = await getAllStudents();
      setAllMahasiswa(res.result);
    } else if (isKaprodi) {
      const res = await getAllStudentsBimbingan({ id: userId });
      const resAll = await getAllStudents();
      setMahasiswa(res.mahasiswa_list);
      setAllMahasiswa(resAll.result);
    } else {
      const res = await getAllStudentsBimbingan({ id: userId });
      setMahasiswa(res.mahasiswa_list);
    }
  };

  const handleRowClick = (id) => {
    navigate(`/detailstudent/${id}`);
  };

  const handleDeleteClick = async (id) => {
    await deleteStudent(id)
    console.log("Delete student with id:", id);
    window.location.reload()
  };

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Searchbar />
          <div className="container-fluid">
            {(!isAdmin || isKaprodi) && (
              <>
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
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mahasiswa?.map((item, index) => (
                            <tr key={index} className="clickable-row">
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.name}
                              </td>
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.nim}
                              </td>
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.prodi}
                              </td>
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.angkatan}
                              </td>
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.email}
                              </td>
                              <td>
                                <button
                                  onClick={() => handleDeleteClick(item?.id)}
                                >
                                  Delete Mahasiswa
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
            {(isAdmin || isKaprodi) && (
              <>
                <h1 className="h3 mb-2 text-gray-800">
                  Daftar Semua Mahasiswa
                </h1>
                <p className="mb-4">Berikut list daftar semua mahasiswa:</p>
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
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allMahasiswa?.map((item, index) => (
                            <tr key={index} className="clickable-row">
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.name}
                              </td>
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.nim}
                              </td>
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.prodi}
                              </td>
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.angkatan}
                              </td>
                              <td onClick={() => handleRowClick(item?.id)}>
                                {item.email}
                              </td>
                              <td>
                                <button
                                  onClick={() => handleDeleteClick(item?.id)}
                                >
                                  Delete Mahasiswa
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
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

import axios from "axios";

// Base URL for the API
const BASE_URL = "https://projectskripsi-fvwdncsc.b4a.run";
//const BASE_URL = "http://localhost:8000";

// Token for authentication
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNob3JkYW4zNDVAZ21haWwuY29tIiwidXNlcl9pZCI6MSwiZXhwIjoxNzE5MzgzMDg0LCJSb2xlcyI6WyJhZG1pbiIsImRvc2VuIiwibWFoYXNpc3dhIl19.-4_y-tLH8E1609q_ADI1C5fX4brH68gWgrAuuuEmLCk";

// Axios instance without headers
export const request = axios.create({
  baseURL: BASE_URL,
});

// Axios instance with authorization and JSON content type headers
export const requestWithHeaders = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

// Axios instance with authorization and multipart/form-data content type headers
export const requestWithHeadersAndFiles = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "multipart/form-data",
  },
});

// Function to login as an admin
export const loginAdmin = async (email, password) => {
  try {
    const res = await request.post("/auth/admin/login", {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      return err.response.status;
    } else {
      throw err;
    }
  }
};

// Function to login as a dosen
export const loginDosen = async (nidn, password) => {
  try {
    const res = await request.post("/auth/dosen/login", {
      nidn,
      password,
    });
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      return err.response.status;
    } else {
      throw err;
    }
  }
};

// Function to get all dosen
export const getAllDosen = async () => {
  try {
    const res = await requestWithHeaders.get("/dosen/");
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to create a new dosen
export const createDosen = async (dosenData) => {
  try {
    console.log(dosenData);
    const res = await requestWithHeadersAndFiles.post("/dosen/", dosenData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error?.message;
  }
};

// Function to get all pengajuan (proposals)
export const getAllPengajuan = async () => {
  try {
    const res = await requestWithHeaders.get("/pengajuan/");
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to get pengajuan (proposals) by dospem ID
export const getAllPengajuanByDospemId = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(`/pengajuan/dospem/${id}`);
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to get all students under a specific dosen
export const getAllStudentsBimbingan = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(
      `/dosen/mahasiswa-bimbingan/${id}`
    );
    console.log("dddddd", res.data);
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to update a dosen
export const updateDosen = async ({ id }) => {
  try {
    const res = await requestWithHeadersAndFiles;
  } catch (error) {}
};

// Function to get the profile of a specific dosen  by ID
export const getProfileDosen = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(`/dosen/${id}`);
    console.log(res?.data?.dosen);
    return res?.data?.dosen;
  } catch (error) {
    console.log(error);
    return error?.message;
  }
};

// Function to get a specific pengajuan (proposal) by mahasiswa (student) ID
export const getPengajuanByIdMahasiswa = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(`pengajuan/mahasiswa/${id}`);
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to get a specific pengajuan (proposal) by its ID
export const getPengajuanById = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(`pengajuan/${id}`);
    console.log(res, "dari api");
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to update a pengajuan (proposal) with status and rejection note
export const updatePengajuan = async ({ id, statusAcc, rejectedNote }) => {
  try {
    const body = {
      status_acc: statusAcc,
      rejected_note: rejectedNote,
    };

    const res = await requestWithHeaders.put(`/pengajuan/${id}`, body);
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to update a pengajuan (proposal) by kaprodi with dospem IDs
export const updatePengajuanKaprodi = async ({
  id,
  statusAcc,
  rejectedNote,
  dospem1Id,
  dospem2Id,
}) => {
  try {
    const res = await requestWithHeaders.put(`/pengajuan/${id}`, {
      rejected_note: rejectedNote,
      status_acc_kaprodi: statusAcc,
      dospem1_id: dospem1Id,
      dospem2_id: dospem2Id,
    });
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to update mahasiswa (student) bimbingan (supervision) data by dosen
export const updateMahasiswaBimbinganDosen = async (updatedData, id) => {
  try {
    const res = await requestWithHeaders.put(`/pengajuan/${id}`, {
      ...updatedData,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error?.message;
  }
};

// Function to check similarity of judul (title) in a pengajuan (proposal)
export const checkSimilarity = async ({ judul, id }) => {
  try {
    const res = await requestWithHeaders.post(
      `/pengajuan/similarity-test?id=${id}`,
      {
        judul,
      }
    );
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to get all students
export const getAllStudents = async () => {
  try {
    const res = await request.get(`/mahasiswa/`);
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to edit profile of a dosen
export const editProfile = async ({
  id,
  name,
  nidn,
  email,
  prodi,
  kepakaran,
  kapasitas,
}) => {
  try {
    const res = await requestWithHeaders.put(`/dosen/${id}`, {
      name,
      nidn,
      email,
      prodi,
      kepakaran,
      kapasitas,
    });
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

// Function to delete a dosen
export const deleteDosen = async (id) => {
  try {
    const res = await requestWithHeaders.delete(`/dosen/${id}`);
    return { result: true, data: res.data }; // Ensure a successful response
  } catch (error) {
    return { result: false, message: error?.message }; // Ensure a failure response
  }
};

// Function to delete a student
export const deleteStudent = async (id) => {
  try {
    const res = await requestWithHeaders.delete(`/mahasiswa/${id}`);
    return { result: true, data: res.data }; // Ensure a successful response
  } catch (error) {
    return { result: false, message: error?.message }; // Ensure a failure response
  }
};

// Function to delete a pengajuan (proposal)
export const deleteProposal = async (id) => {
  try {
    const res = await requestWithHeaders.delete(`/pengajuan/${id}`);
    return { result: true, data: res.data }; // Ensure a successful response
  } catch (error) {
    return { result: false, message: error?.message }; // Ensure a failure response
  }
};

// Kode ini mendefinisikan serangkaian fungsi untuk berinteraksi dengan API.
// Fungsi-fungsi tersebut menangani berbagai tugas seperti memasukkan user, mengambil data,
// create dan update, dan delete. Setiap fungsi menggunakan Axios untuk
// membuat permintaan HTTP dan menangani kesalahan dengan tepat. Komentar tersebut menjelaskan
// tujuan setiap fungsi dan konfigurasi instance Axios.

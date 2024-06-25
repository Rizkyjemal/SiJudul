import axios from "axios";

const BASE_URL = "https://projectskripsi-fvwdncsc.b4a.run";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNob3JkYW4zNDU3QGdtYWlsLmNvbSIsInVzZXJfaWQiOjksImV4cCI6MTcxOTI5NDk0MiwiUm9sZXMiOlsiYWRtaW4iLCJkb3NlbiIsIm1haGFzaXN3YSJdfQ.XJeZbFo8-3CsOlKflwat3YBPypg7eoWqgf00_KXuqDE";

export const request = axios.create({
  baseURL: BASE_URL,
});

export const requestWithHeaders = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

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

export const getAllDosen = async () => {
  try {
    const res = await requestWithHeaders.get("/dosen/");
    // console.log(res.data)
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const getAllPengajuan = async () => {
  try {
    const res = await requestWithHeaders.get("/pengajuan/");
    // console.log(res.data)
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const getAllStudents = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(
      `/dosen/mahasiswa-bimbingan/${id}`
    );
    // console.log(res.data)
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const getProfileDosen = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(`/dosen/${id}`);
    // console.log(res.data)
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const getPengajuanById = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(`pengajuan/mahasiswa/${id}`);
    // console.log(res.data)
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const updatePengajuan = async ({ id, statusAcc, rejectedNote }) => {
  try {
    const res = await requestWithHeaders.put(`/pengajuan/${id}`, {
      statusAcc,
      rejectedNote,
    });
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const checkSimilarity = async ({ judul }) => {
  try {
    const res = await requestWithHeaders.post("/pengajuan/similarity-test", {
      judul,
    });
    return res.data;
  } catch (error) {
    return error?.message;
  }
};


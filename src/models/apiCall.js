import axios from "axios";

const BASE_URL = "https://projectskripsi-fvwdncsc.b4a.run";
// const BASE_URL = "http://localhost:8000";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNob3JkYW4zNDVAZ21haWwuY29tIiwidXNlcl9pZCI6MSwiZXhwIjoxNzE5MzgzMDg0LCJSb2xlcyI6WyJhZG1pbiIsImRvc2VuIiwibWFoYXNpc3dhIl19.-4_y-tLH8E1609q_ADI1C5fX4brH68gWgrAuuuEmLCk";

export const request = axios.create({
  baseURL: BASE_URL,
});

export const requestWithHeaders = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'application/json',
  },
});

export const requestWithHeadersAndFiles = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'multipart/form-data'
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

// const dosen = {
//   "name": "testdosen2",
//   "nidn": "1233212312",
//   "email": "testdosen2@gmail.com",
//   "password": "123456",
//   "jabatan": "dosen",
//   "kepakaran": "Software Engineer",
//   "prodi": "Informatika",
//   "kapasitas": 10
// }

export const createDosen = async (dosenData) => {
  try {
    console.log(dosenData)
    const res = await requestWithHeadersAndFiles.post("/dosen/", dosenData);
    console.log(res.data)
    return res.data;
    // return
  } catch (error) {
    console.log(error?.response?.data)
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

export const getAllStudentsBimbingan = async ({ id }) => {
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

export const updateDosen = async ({id}) => {
  try {
    const res = await requestWithHeadersAndFiles
  } catch (error) {
    
  }
}

export const getProfileDosen = async ({ id }) => {
  // console.log("aaaa",id);
  try {
    const res = await requestWithHeaders.get(`/dosen/${id}`);
    console.log(res?.data?.dosen)
    return res?.data?.dosen;
  } catch (error) {
    console.log(error)
    return error?.message;
  }
};

export const getPengajuanByIdMahasiswa = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(`pengajuan/mahasiswa/${id}`);
    // console.log(res,"dari api")
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const getPengajuanById = async ({ id }) => {
  try {
    const res = await requestWithHeaders.get(`pengajuan/${id}`);
    console.log(res,"dari api")
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const updatePengajuan = async ({ id, statusAcc, rejectedNote }) => {
  try {
    const res = await requestWithHeaders.put(`/pengajuan/${id}`, {
      status_acc : statusAcc,
      rejected_note : rejectedNote,
    });
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const checkSimilarity = async ({ judul, id }) => {
  try {
    const res = await requestWithHeaders.post(`/pengajuan/similarity-test?id=${id}`, {
      judul,
    });
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const getAllStudents = async () => {
  try {
    const res = await request.get(`/mahasiswa/`);
    // console.log(res.data)
    return res.data;
  } catch (error) {
    return error?.message;
  }
};

export const editProfile = async ({id,name,nidn,email,prodi,kepakaran}) => {
  try {
    const res = await requestWithHeaders.put(`/dosen/${id}`, {
      name,nidn,email,prodi,kepakaran
    });
    // console.log(res.data)
    return res.data;
  } catch (error) {
    return error?.message;
  }
};


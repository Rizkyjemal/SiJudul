import axios from "axios";

const BASE_URL = "https://projectskripsi-fvwdncsc.b4a.run";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNob3JkYW4zNDU3QGdtYWlsLmNvbSIsInVzZXJfaWQiOjksImV4cCI6MTcxOTA0NDczMSwiUm9sZXMiOlsiYWRtaW4iLCJkb3NlbiIsIm1haGFzaXN3YSJdfQ.4HH_lZkqKmG3cZ2vI-_ueZbzQLuITNT9h82x9FBfwdY";

export const request = axios.create({
  baseURL: BASE_URL,
});

export const requestWithHeaders = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const login = async (email, password) => {
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

export const getAllDosen = async () => {
  try {
    const res = await requestWithHeaders.get("/dosen/")
    // console.log(res.data)
    return res.data
  } catch (error) {
    return(error?.message)
  }
}
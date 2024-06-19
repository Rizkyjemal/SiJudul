import axios from "axios";

const BASE_URL = "https://projectskripsi-fvwdncsc.b4a.run";
let TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNob3JkYW4zNDU3QGdtYWlsLmNvbSIsInVzZXJfaWQiOjksImV4cCI6MTcxODg3NjM5NywiUm9sZXMiOlsiYWRtaW4iLCJkb3NlbiIsIm1haGFzaXN3YSJdfQ.BPqmu87kiamz9tm4tYishabupMEYhVFzfxtxZJDoUgM";

export const request = axios.create({
  baseURL: BASE_URL,
});

export const adminrequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

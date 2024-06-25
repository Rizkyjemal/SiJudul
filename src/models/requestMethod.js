import axios from "axios";

const BASE_URL = "https://projectskripsi-fvwdncsc.b4a.run";
let TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNob3JkYW4zNDVAZ21haWwuY29tIiwidXNlcl9pZCI6MSwiZXhwIjoxNzE5MzgzMDg0LCJSb2xlcyI6WyJhZG1pbiIsImRvc2VuIiwibWFoYXNpc3dhIl19.-4_y-tLH8E1609q_ADI1C5fX4brH68gWgrAuuuEmLCk";

export const request = axios.create({
  baseURL: BASE_URL,
});

export const requestWithHeaders = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

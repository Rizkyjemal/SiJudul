import { request } from "./requestMethod";
import { adminrequest } from "./requestMethod";

// export const login = async () => {
//   try {
//     const res = await request.post("/auth/admin/login");
//     print(res);
//     // return res.data;
//     // dispatch(loginSuccess(res.data));
//   } catch (err) {
//     // console.log(err)
//     return (
//       err?.response?.data?.message || "Network Error, please try again later"
//     );
//   }
// };

export const getAllAdmin = async () => {
  try {
    const res = await adminrequest.get("/admin");
    // return res.data;
    console.log(res, "jfhjshfj");
    // dispatch(loginSuccess(res.data));
  } catch (err) {
    // console.log(err)
    return (
      err?.response?.data?.message || "Network Error, please try again later"
    );
  }
};

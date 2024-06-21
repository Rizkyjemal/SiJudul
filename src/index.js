import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Lectures from "./Lectures";
import Students from "./Students";
import Login from "./Login";
import Proposal from "./Proposal";
import Approval from "./Approval";
import Penambahan from "./Penambahan";
import Edit from "./Edit";
import Profile from "./Profile";
import Editprofile from "./Editprofile";
import Tambahdosen from "./Tambahdosen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/lectures",
    element: <Lectures />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/proposal",
    element: <Proposal />,
  },
  {
    path: "/approval",
    element: <Approval />,
  },
  {
    path: "/penambahan",
    element: <Penambahan />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editprofile",
    element: <Editprofile />,
  },
  {
    path: "tambahdosen",
    element: <Tambahdosen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

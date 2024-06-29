import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Lectures from "./Lectures";
import Students from "./Students";
import Detailstudent from "./Detailstudent";
import Login from "./Login";
import Proposal from "./Proposal";
import Approval from "./Approval";
import Edit from "./Edit";
import Profile from "./Profile";
import Editprofile from "./Editprofile";
import Tambahdosen from "./Tambahdosen";
import PrivateRoute from "./PrivateRoute";
import App from "./App";
import ApprovalKaprodi from "./ApprovalKaprodi";
import ApprovalKaprodiDetail from "./ApprovalKaprodiDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<App />} />
          <Route path="/students" element={<Students />} />
          <Route path="/detailstudent/:id" element={<Detailstudent />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/approval/:id" element={<Approval />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/tambahdosen" element={<Tambahdosen />} />
        </Route>
        <Route
          path="/lectures"
          element={<PrivateRoute roles={["admin", "kaprodi"]} />}
        >
          <Route path="" element={<Lectures />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/approval-kaprodi" element={<ApprovalKaprodi />} />
        <Route
          path="/approval-kaprodi-detail/:id"
          element={<ApprovalKaprodiDetail />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

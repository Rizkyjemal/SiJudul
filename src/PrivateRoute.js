import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ roles }) => {
  const token = localStorage.getItem("token");
  const userAuth = localStorage.getItem("auth"); 
  const authObject = JSON.parse(userAuth);
 
  const role = authObject.roles;


  if (!token) {
    return <Navigate to="/login" />;
  }

  const userRoles = authObject.roles;

  if (roles && !roles.some(role => userRoles.includes(role))) {
    return <Navigate to="/" />; // Redirect to home if user doesn't have any of the required roles
  }

  return <Outlet />;
};

export default PrivateRoute;

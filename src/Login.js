import React, { useEffect, useState } from "react";
import { login } from "./models/apiCall";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const modalElement = document.getElementById("loginFailModal");
    const modal = new window.bootstrap.Modal(modalElement);

    if (loginFailed) {
      modal.show();
    } else {
      modal.hide();
    }
  }, [loginFailed]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      if (result !== 401) {
        setLoginFailed(false);
        localStorage.setItem("token", result.token);
        navigate("/");
      } else {
        setLoginFailed(true);
        setErrorMessage("Invalid Email Or Password");
      }
    } catch (err) {
      setLoginFailed(true);
      setErrorMessage("Invalid Email Or Password");
    }
  };

  const closeModal = () => {
    console.log("fsfs");
    const modalElement = document.getElementById("loginFailModal");
    const modal = new window.bootstrap.Modal(modalElement);
    modal.hide();
    setLoginFailed(false);
  };

  return (
    <>
      <div className="body-login">
        <div className="login-container">
          <img src="assets/images/logo.png" alt="User Icon" />
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleLogin} className="button">
            LOGIN
          </button>
        </div>

        {/* Modal for login failure */}
        <div
          className="modal fade"
          id="loginFailModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="loginFailLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginFailLabel">
                  Login Failed
                </h5>
                <button className="close" type="button" onClick={closeModal}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{errorMessage}</div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </>
  );
}

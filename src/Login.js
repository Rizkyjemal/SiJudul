export default function Login() {
  return (
    <>
      <div className="body-login">
        <div class="login-container">
          <img src="assets/images/logo.png" alt="User Icon" />
          <h2>Login</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <a href="/" class="button">
            LOGIN
          </a>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </>
    /*
    <div className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="assets/images/logo.png"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" for="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center"></div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  //style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright &copy; SiJudul - UPN Veteran Jakarta 2024
        </div>
      </div>
    </div>
    */
  );
}

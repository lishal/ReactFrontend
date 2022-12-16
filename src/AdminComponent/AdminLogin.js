import React from "react";
import "../admin.css";

export default function AdminLogin() {
  return (
    <div className="admin_watford">
      <div className="admin_login_panel">
        <div className="brandname_panel">
        <img
              src={"/Images/logo.jpg"}
              alt="Logo"
              height="70"
              width="60"
            />
          <h1 className="display-5">Admin Login</h1>
        </div>
        <hr style={{ borderTop: "2px dotted black", opacity: "1" , width:"40%", margin:"auto"}} />
        <div className="login_main_panel mt-4">
          <form>
            <div className="mb-3 mx-3">
              <label htmlfor="exampleInputEmail1" className="form-label fs-5 fw-semibold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <div id="emailHelp" className="form-text fs-5">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div className="mb-3 mx-3">
              <label htmlFor="exampleInputPassword1" className="form-label fs-5 fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary fs-5 d-flex m-auto">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

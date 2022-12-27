import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import "../admin.css";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();
     if(!localStorage.getItem("token")===false){
        window.location.href="http://localhost:3000/admin/"
     }
      const handleSubmit = async (e) => {
        e.preventDefault();
       
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        //console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/admin");
            window.location.reload();

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: [e.target.value]})
    }
     
    
    
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
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mx-3">
              <label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-semibold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={credentials.email} 
                onChange={onChange}
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
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                value={credentials.password} 
                onChange={onChange}
                autoComplete="false"
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

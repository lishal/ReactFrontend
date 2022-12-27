import React,{useEffect} from "react";
import { push as Menu } from "react-burger-menu";
import { NavLink ,useLocation, useNavigate} from "react-router-dom";
import './Hamburger.css'


export default function Hamburger() {
  let location=useLocation();
  let navigate=useNavigate();
  useEffect(() => {
  }, [location]);
  const test=(()=>{
    localStorage.setItem("token","")
    navigate("/adminLogin")
  })
  return (
    <div id="outer-container">
      <Menu >
            <NavLink to="/admin"  id={location.pathname==="/admin"?"active":" "} className="menu-item">
            Home
            </NavLink>
            <NavLink to="/addmember" id={location.pathname==="/addmember"?"active":" "}  className="menu-item">
            Add Members
            </NavLink>
            <NavLink onClick={test} className="menu-item">
              Logout
            </NavLink>
           
      </Menu>
    </div>
  );
}

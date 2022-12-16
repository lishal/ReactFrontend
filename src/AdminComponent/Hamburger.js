import React,{useEffect} from "react";
import { push as Menu } from "react-burger-menu";
import { NavLink ,useLocation} from "react-router-dom";
import './Hamburger.css'


export default function Hamburger() {
  let location=useLocation();
  useEffect(() => {
  }, [location]);
  return (
    <div id="outer-container">
      <Menu >
            <NavLink to="/admin"  id={location.pathname==="/admin"?"active":" "} className="menu-item">
            Home
            </NavLink>
            <NavLink to="/addmember" id={location.pathname==="/addmember"?"active":" "}  className="menu-item" href="/about">
            Add Members
            </NavLink>
           
      </Menu>
    </div>
  );
}

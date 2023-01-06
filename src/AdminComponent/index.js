import React from "react";
import Hamburger from "./Hamburger";
import "../App.css";
import Topnav from "./Topnav";
import Home from "./Home";

export default function index() {
  return (
    <div>
      <Hamburger />
      <Topnav />
      <Home />
    </div>
  );
}

import React from "react";
import Hamburger from "./Hamburger";
import "../App.css";
import Topnav from "./Topnav";
import Home from "./Home";
import Alert from "../Components/Alert";

export default function index() {
  return (
    <div>
      <Hamburger />
      <Topnav />
      <Home />
    </div>
  );
}

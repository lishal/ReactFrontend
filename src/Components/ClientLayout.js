import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";


export default function ClientLayout() {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

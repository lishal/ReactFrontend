import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function About() {
  return (
    <>
    <Nav/>
    <div className="container">
      <div className="watford_img d-flex justify-content-center mt-3">
        <img
          src={process.env.PUBLIC_URL + "/Images/logo.jpg"}
          alt="Logo"
          height="200"
          width="180"
        />
      </div>
      <div className="text-wrap text-uppercase fs-3 fw-semibold mt-3 text-center">
        <b>
          <span>
            CONSTITUTION OF THE NEPALESE COMMUNITY WATFORD UK -OCTOBER 2012
          </span>
        </b>
      </div>
      <div className="introduction text-wrap">
        <span
          className="text-uppercase fs-3 mt-3"
          style={{fontWeight:"500",display:"flex", width:"100%",justifyContent:"center"}}
        >
          Introduction
        </span>
        <p style={{textAlign: "justify",textJustify:"inter-word"}}>
          The nepalese community was established in october 2012 by fellow
          british nepalese living in watford hertfordshire in the UK who are
          originally from different parts of Nepal aiming to bring nepalese
          people together by sharing each other culture’s and educate our new
          generation about our traditions and cultures to maintain and continue
          to promote our nepalese cultures to other community in a wider scale.
          The community is exclusively formed with the idea to help and share
          grievances, happiness, and different cultures. It is, therefore, a
          non-profitable organization aiming to establish unity in society and
          maintain good relations and cooperation amongst members in order to
          provide moral, physical and financial support to any member of the
          community in need.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

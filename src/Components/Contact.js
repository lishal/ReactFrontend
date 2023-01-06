import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Contact() {
  const test = () => {
    alert("I am clicked");
  };
  return (
    <div>
      <Nav />
      <div className="watford_contact" style={{ minHeight: "55vh" }}>
        <p className="watford_contact_h1 fs-1 fw-bold d-flex justify-content-center my-2">
          Get In Touch!
        </p>
        <p className="watford_contact_h2 fs-3 fw d-flex justify-content-center my-1">
          Contact Us! Help at to join the team
        </p>
        <p className="watford_contact_h2 fs-5 fw d-flex justify-content-center my-1">
          Click &nbsp;<a href="#"> here </a>&nbsp; to submit your details for
          registration.
        </p>
        <div
          className="watford_contact_box-group d-flex justify-content-center align-items-center my-4"
          
        >
          <div className="watford_contact_box1">
            <i className="material-icons">location_on</i>
            <p className="my-2">Watford UK</p>
          </div>
          <div className="watford_contact_box2">
            <i className="material-icons">phone</i>
            <p className="my-2">+977-9867232568</p>
          </div>
          <div className="watford_contact_box3">
            <i className="material-icons">email</i>
            <p className="my-2">lbhari188@gmail.com</p>
          </div>
        </div>
        <div
          className="watford_contact_main my-2 m-auto"
          style={{ minHeight: "50vh", border: "2px solid black", width: "70%" }}
        >
          <form className=" py-3">
            <div className="mb-3 my-3 mx-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Please enter your name"
                required
              />
            </div>
            <div className="mb-3 my-3 mx-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Please enter your email"
                required
              />
            </div>
            <div className="mb-3 my-3 mx-3">
              <label htmlFor="number" className="form-label">
                Contact No
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                placeholder="Please enter your contact number"
                required
              />
            </div>
            <div className="mb-3 my-3 mx-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Please enter your message here"
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="d-flex btn btn-primary w-auto  m-auto  justify-content-center">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

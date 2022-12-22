import React from "react";
import Topnav from "./Topnav";
import Hamburger from "./Hamburger";
import { useContext } from "react";
import memberContext from "../Context/Members/memberContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMember() {
  const context = useContext(memberContext);
  const { addMember, errors, duplicateCheck } = context;

  const navigate = useNavigate();

  const [member, setMember] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    address_nepal: "",
    dob: "",
    postalTown: "",
    postalCode: "",
    familyFullName: "",
    familyRelation: "",
    familydob: "",
    familyAddress: "",
    familyPhone: "",
  });

  const onChange = (e) => {
    setMember({ ...member, [e.target.name]: [e.target.value] });
  };
  const handleClick = (e) => {
    e.preventDefault();

    addMember(
      member.fullname,
      member.email,
      member.phoneNumber,
      member.streetAddress,
      member.address_nepal,
      member.dob,
      member.postalTown,
      member.postalCode,
      member.familyFullName,
      member.familyRelation,
      member.familydob,
      member.familyAddress,
      member.familyPhone
    );
  };

  let clear = () => {};
  // let [errFullname,setErrFullname]=useState([])
  let errFullname = "";
  let errEmail = "";
  let errPhonenum = "";
  let errStreetadd = "";
  let errAddressNp = "";
  let errdob = "";
  let errPtown = "";
  let errPcode = "";
  let errFFname = "";
  let errFrelation = "";
  let errfdbo = "";
  let errFadd = "";
  let errFphone = "";
  if (errors) {
    errors.forEach((error) => {
      switch (error.param) {
        case "fullname":
          errFullname = error.msg;
          break;
        case "email":
          errEmail = error.msg;
          break;
        case "phoneNumber":
          errPhonenum = error.msg;
          break;
        case "streetAddress":
          errStreetadd = error.msg;
          break;
        case "address_nepal":
          errAddressNp = error.msg;
          break;
        case "dob":
          errdob = error.msg;
          break;
        case "postalTown":
          errPtown = error.msg;
          break;
        case "postalCode":
          errPcode = error.msg;
          break;
        case "familyFullName":
          errFFname = error.msg;
          break;
        case "familyRelation":
          errFrelation = error.msg;
          break;
        case "familydob":
          errfdbo = error.msg;
          break;
        case "familyAddress":
          errFadd = error.msg;
          break;
        case "familyPhone":
          errFphone = error.msg;
          break;

        default:
          break;
      }
    });
  } else {
    if (duplicateCheck.length === 0) {
      navigate("/admin");
    }
  }

  return (
    <>
      <Hamburger />
      <Topnav />
      <div className="container">
        <div className="row">
          <div className="col-75">
            <div className="container">
              <h2 className="my-3" style={{ color: "#a90000" }} align="center">
                <b>Membership Form</b>
              </h2>
              <form className="my-3" onSubmit={handleClick}>
                <div className="row my-3">
                  <h3 align="center">Member Personal Details:</h3>
                  <div className="col-50">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="MR BISHNU PANT"
                      className={
                        errFullname === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.fullname}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errFullname}</span>
                    </div>
                    <label htmlFor="dob"> Date Of Birth:</label>
                    <input
                      onChange={onChange}
                      type="date"
                      id="dob"
                      name="dob"
                      className={
                        errdob === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.dob}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errdob}</span>
                    </div>
                    <label htmlFor="postalTown"> Postal Town:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="postalTown"
                      name="postalTown"
                      placeholder="postal Town"
                      className={
                        errPtown === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.postalTown}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errPtown}</span>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="watford@gmail.com"
                      className={
                        errEmail === ""
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      value={member.email}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>
                        {errEmail
                          ? errEmail
                          : "" || duplicateCheck.emailExist
                          ? duplicateCheck.emailExist
                          : ""}
                      </span>
                    </div>
                  </div>
                  <div className="col-50">
                    <label htmlFor="phoneNumber"> Phone Number:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter Your Phone Number"
                      className={
                        errPhonenum === "" || duplicateCheck.numberExist
                          ? duplicateCheck.numberExist
                          : ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.phoneNumber}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>
                        {errPhonenum
                          ? errPhonenum
                          : " " || duplicateCheck.numberExist
                          ? duplicateCheck.numberExist
                          : ""}
                      </span>
                    </div>
                    <label htmlFor="streetAddress"> Street Address:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="streetAddress"
                      name="streetAddress"
                      placeholder="Street Address"
                      className={
                        errStreetadd === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.streetAddress}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errStreetadd}</span>
                    </div>

                    <label htmlFor="postalCode"> Postal Code:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Postal Code"
                      className={
                        errPcode === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.postalCode}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errPcode}</span>
                    </div>
                    <label htmlFor="address_nepal"> Address in Nepal:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="address_nepal"
                      name="address_nepal"
                      placeholder="Address Of Nepal"
                      className={
                        errAddressNp === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.address_nepal}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errAddressNp}</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row my-3">
                  <h3 align="center">Family Details:</h3>
                  <div className="col-50">
                    <label htmlFor="familyFullName">Full Name</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="familyFullName"
                      name="familyFullName"
                      placeholder="MRS SITA KUMARI PANT"
                      className={
                        errFFname === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      min={5}
                      value={member.familyFullName}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errFFname}</span>
                    </div>
                    <label htmlFor="familydob"> Date Of Birth:</label>
                    <input
                      onChange={onChange}
                      type="date"
                      id="familydob"
                      name="familydob"
                      className={
                        errfdbo === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.familydob}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errfdbo}</span>
                    </div>
                    <label htmlFor="familyPhone"> Phone Number:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="familyPhone"
                      name="familyPhone"
                      placeholder="Enter Family Mobile Number"
                      className={
                        errFphone === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.familyPhone}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errFphone}</span>
                    </div>
                  </div>
                  <div className="col-50">
                    <label htmlFor="familyRelation">Relation</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="familyRelation"
                      name="familyRelation"
                      placeholder="Relation of the mention name"
                      className={
                        errFrelation === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.familyRelation}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errFrelation}</span>
                    </div>
                    <label htmlFor="familyAddress"> Address in Nepal:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="familyAddress"
                      name="familyAddress"
                      placeholder="Famliy Address in Nepal"
                      className={
                        errFadd === ""
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={member.familyAddress}
                    />
                    <div style={{ color: "red", marginTop: "-10px" }}>
                      <span>{errFadd}</span>
                    </div>
                  </div>
                </div>
                <hr />
                <label htmlFor="photo"> Photo</label>
                <input onChange={onChange} type="file" name="photo" />
                <div className="button-group d-flex justify-content-center ">
                  <button type="submit" className="btn btn-success w-50 mx-2">
                    Submit
                  </button>
                  <button type="cancel" className="btn btn-danger w-50 mx-2">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

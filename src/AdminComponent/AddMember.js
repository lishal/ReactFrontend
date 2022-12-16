import React from "react";
import Topnav from "./Topnav";
import Hamburger from "./Hamburger";
import { useContext } from "react";
import memberContext from "../Context/Members/memberContext";
import { useState } from "react";
import { useEffect } from "react";
export default function AddMember() {
  const context = useContext(memberContext);
  const { addMember, errors } = context;

  const [member, setMember] = useState({
    fullname: " ",
    email: " ",
    phoneNumber: " ",
    streetAddress: " ",
    address_nepal: " ",
    dob: " ",
    postalTown: " ",
    postalCode: " ",
    familyFullName: " ",
    familyRelation: " ",
    familydob: " ",
    familyAddress: " ",
    familyPhone: " ",
  });

  const [fullname, setFullname] = useState([]);

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

  // errors.map((err)=>{
  //   if(err.param==="fullname"){
  //     // setFullname({fullname:[err.msg]})
  //     setFullname(err.msg);
  //   }
  // })
  // console.log(fullname)

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
              <form className="my-3">
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
                      className="form-control"
                    />
                    <div className=" invalid-feedback">
                      {errors.map((err) => {
                        if (err.param === "fullname") {
                          console.log(err.msg)
                          return(<div><span key={err.param}>LISHAL</span></div>) 
                        }
                      })}
                    </div>

                    <label htmlFor="dob"> Date Of Birth:</label>
                    <input
                      onChange={onChange}
                      type="date"
                      id="dob"
                      name="dob"
                    />
                    <label htmlFor="postalTown"> Postal Town:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="postalTown"
                      name="postalTown"
                      placeholder="postal Town"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="watford@gmail.com"
                    />
                  </div>
                  <div className="col-50">
                    <label htmlFor="phoneNumber"> Phone Number:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter Your Phone Number"
                    />
                    <label htmlFor="streetAddress"> Street Address:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="streetAddress"
                      name="streetAddress"
                      placeholder="Street Address"
                    />

                    <label htmlFor="postalCode"> Postal Code:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Postal Code"
                    />
                    <label htmlFor="address_nepal"> Address in Nepal:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="address_nepal"
                      name="address_nepal"
                      placeholder="Address Of Nepal"
                    />
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
                    />
                    <label htmlFor="familydob"> Date Of Birth:</label>
                    <input
                      onChange={onChange}
                      type="date"
                      id="familydob"
                      name="familydob"
                    />
                    <label htmlFor="familyPhone"> Phone Number:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="familyPhone"
                      name="familyPhone"
                      placeholder="Enter Family Mobile Number"
                    />
                  </div>
                  <div className="col-50">
                    <label htmlFor="familyRelation">Relation</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="familyRelation"
                      name="familyRelation"
                      placeholder="Relation of the mention name"
                    />
                    <label htmlFor="familyAddress"> Address in Nepal:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="familyAddress"
                      name="familyAddress"
                      placeholder="Famliy Address in Nepal"
                    />
                  </div>
                </div>
                <hr />
                <label htmlFor="photo"> Photo</label>
                <input onChange={onChange} type="file" name="photo" />
                <div className="button-group d-flex justify-content-center ">
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="btn btn-success w-50 mx-2"
                  >
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

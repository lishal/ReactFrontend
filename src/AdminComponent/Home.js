import React, { useContext, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import memberContext from "../Context/Members/memberContext";
import Memberitem from "./Memberitem";

const Home = () => {
  let navigate=useNavigate();
  const ref = useRef(null);
  const refClose = useRef(null);
  const refDel = useRef(null);
  const refDelClose = useRef(null);
  const context = useContext(memberContext);
  const { members, getMembers,editMember,deleteMember } = context;
  let delID=""
  useEffect(() => {
    getMembers();
    //eslint-disable-next-line
  }, []);

  const [member, setMember] = useState({
    update_fullname: " ",
    update_email: " ",
    update_phoneNumber: " ",
    update_streetAddress: " ",
    update_address_nepal: " ",
    update_dob: " ",
    update_postalTown: " ",
    update_postalCode: " ",
    update_familyFullName: " ",
    update_familyRelation: " ",
    update_familydob: " ",
    update_familyAddress: " ",
    update_familyPhone: " ",
  });


  if(localStorage.getItem("token")===""){
    navigate("/adminLogin");
  }
  else{
 
  const updateMember = (currentMember) => {
    ref.current.click();
            
    setMember({
      id: currentMember._id,
      update_fullname: currentMember.fullname,
      update_email: currentMember.email,
      update_phoneNumber: currentMember.phoneNumber,
      update_streetAddress: currentMember.streetAddress,
      update_address_nepal: currentMember.address_nepal,
      update_dob: currentMember.dob,
      update_postalTown: currentMember.postalTown,
      update_postalCode: currentMember.postalCode,
      update_familyFullName: currentMember.familyFullName,
      update_familyRelation: currentMember.familyRelation,
      update_familydob: currentMember.familydob,
      update_familyAddress: currentMember.familyAddress,
      update_familyPhone: currentMember.familyPhone,
    });
    
  };

  const delMember=(deleteCurrentMember)=>{
    refDel.current.click();
    delID=deleteCurrentMember
  }

  const onChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleClick = ()=>{ 
    editMember(member.id,
      member.update_fullname,
      member.update_email,
      member.update_phoneNumber,
      member.update_streetAddress,
      member.update_address_nepal,
      member.update_dob,
      member.update_postalTown,
      member.update_postalCode,
      member.update_familyFullName,
      member.update_familyRelation,
      member.update_familydob,
      member.update_familyAddress,
      member.update_familyPhone,);
      refClose.current.click();
}
  return (
    <div>
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Modal for Edit
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Member
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="row my-3">
                  <h3 align="center">Member Personal Details:</h3>
                  <div className="col-50">
                    <label htmlFor="update_fullname">Full Name</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_fullname"
                      name="update_fullname"
                      placeholder="MR BISHNU PANT"
                      value={member.update_fullname}
                      required
                    />
                    <label htmlFor="update_dob"> Date Of Birth:</label>
                    <input
                      onChange={onChange}
                      type="date"
                      id="update_dob"
                      name="update_dob"
                      value={member.update_dob}
                      required
                    />
                    <label htmlFor="update_postalTown"> Postal Town:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_postalTown"
                      name="update_postalTown"
                      placeholder="postal Town"
                      value={member.update_postalTown}
                      required
                    />
                    <label htmlFor="update_email">Email</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_email"
                      name="update_email"
                      placeholder="watford@gmail.com"
                      value={member.update_email}
                      required
                    />
                  </div>
                  <div className="col-50">
                    <label htmlFor="update_phoneNumber"> Phone Number:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_phoneNumber"
                      name="update_phoneNumber"
                      placeholder="Enter Your Phone Number"
                      value={member.update_phoneNumber}
                      required
                    />
                    <label htmlFor="update_streetAddress">
                      Street Address:
                    </label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_streetAddress"
                      name="update_streetAddress"
                      placeholder="Street Address"
                      value={member.update_streetAddress}
                      required
                    />

                    <label htmlFor="update_postalCode"> Postal Code:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_postalCode"
                      name="update_postalCode"
                      placeholder="Postal Code"
                      value={member.update_postalCode}
                      required
                    />
                    <label htmlFor="update_address_nepal">
                      Address in Nepal:
                    </label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_address_nepal"
                      name="update_address_nepal"
                      placeholder="Address Of Nepal"
                      value={member.update_address_nepal}
                      required
                    />
                  </div>
                </div>
                <hr />
                <div className="row my-3">
                  <h3 align="center">Family Details:</h3>
                  <div className="col-50">
                    <label htmlFor="update_familyFullName">Full Name</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_familyFullName"
                      name="update_familyFullName"
                      placeholder="MRS SITA KUMARI PANT"
                      value={member.update_familyFullName}
                      required
                    />
                    <label htmlFor="update_familydob"> Date Of Birth:</label>
                    <input
                      onChange={onChange}
                      type="date"
                      id="update_familydob"
                      name="update_familydob"
                      value={member.update_familydob}
                      required
                    />
                    <label htmlFor="update_familyPhone"> Phone Number:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_familyPhone"
                      name="update_familyPhone"
                      placeholder="Enter Family Mobile Number"
                      value={member.update_familyPhone}
                      required
                    />
                  </div>
                  <div className="col-50">
                    <label htmlFor="update_familyRelation">Relation</label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_familyRelation"
                      name="update_familyRelation"
                      placeholder="Relation of the mention name"
                      value={member.update_familyRelation}
                      required
                    />
                    <label htmlFor="update_familyAddress">
                      Address in Nepal:
                    </label>
                    <input
                      onChange={onChange}
                      type="text"
                      id="update_familyAddress"
                      name="update_familyAddress"
                      placeholder="Famliy Address in Nepal"
                      value={member.update_familyAddress}
                      required
                    />
                  </div>
                </div>
                <hr />
                <label htmlFor="photo"> Photo</label>
                <input onChange={onChange} type="file" name="photo" />
                <div className="modal-footer d-flex justify-content-center ">
                  <div className="button-group d-flex ">
                    <button
                      type="submit"
                      onClick={handleClick}
                      className="btn btn-success w-50 mx-2"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger w-50 mx-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Model For Delete */}

      <button
        type="button"
        ref={refDel}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#deleteModel"
      >
        Modal for Delete
      </button>

      <div
        className="modal fade"
        id="deleteModel"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="deleteModel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Member?</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                ref={refDelClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to <span className="text-danger font-weight-bolder">DELETE</span> member?</p>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success mx-3"
                onClick={() => {
                  console.log(delID)
                  deleteMember(delID);
                  refDelClose.current.click()
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-danger mx-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3 mx-3">
        <h2 align="center">Available Members</h2>
        {members.map((member) => {
          return (
            <Memberitem
              key={member._id}
              updateMember={updateMember}
              delMember={delMember}
              member={member}
            />
          );
        })}
      </div>
    </div>
  );
  }
  
};

export default Home;

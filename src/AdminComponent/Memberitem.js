import React, { useRef } from "react";
import { useContext } from "react";
import memberContext from "../Context/Members/memberContext";

const Memberitem = (props) => {
  const context = useContext(memberContext);
  const { deleteMember } = context;
  const { updateMember } = props;
  const ref = useRef(null);
  const refClose = useRef(null);

  return (
    <>
      <button
        type="button"
        ref={ref}
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
                ref={refClose}
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
                onClick={(id) => {
                  deleteMember(props.member._id);
                  refClose.current.click()
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
      <div className="col-md-4 my-3">
        <div className="card">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title text-center my-3">
              {props.member.fullname}
            </h5>
            <p className="card-text">Email: {props.member.email}</p>
            <p className="card-text">
              Phone Number: {props.member.phoneNumber}
            </p>
            <p className="card-text">
              Street Address: {props.member.streetAddress}
            </p>
            <p className="card-text">
              Address of Nepal: {props.member.address_nepal}
            </p>
            <p className="card-text">Date of Birth: {props.member.dob}</p>
            <p className="card-text">Postal Town: {props.member.postalTown}</p>
            <p className="card-text">Postal Code: {props.member.postalCode}</p>
            <p className="card-text">
              Family Name: {props.member.familyFullName}
            </p>
            <p className="card-text">
              Family Relation: {props.member.familyRelation}
            </p>
            <p className="card-text">
              Family Date of Birth: {props.member.familydob}
            </p>
            <p className="card-text">
              Family Address: {props.member.familyAddress}
            </p>
            <p className="card-text">
              Family Phone Number: {props.member.familyPhone}
            </p>
            <h3 className="d-flex justify-content-center">
              <i
                className="fas fa-trash mx-3 "
                onClick={() => {
                  ref.current.click();
                }}
              ></i>
              <i
                className="fas fa-user-edit mx-3"
                onClick={() => {
                  updateMember(props.member);
                }}
              ></i>
            </h3>

            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Memberitem;

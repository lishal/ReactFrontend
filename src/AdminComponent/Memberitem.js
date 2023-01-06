import React from "react";

const Memberitem = (props) => {
  const { updateMember,delMember } = props;
  


  return (
    <>
      
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
                  delMember(props.member._id)
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

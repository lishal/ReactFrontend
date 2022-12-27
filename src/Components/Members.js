import React, { useContext ,useEffect} from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import memberContext from "../Context/Members/memberContext";

export default function Members() {
  useEffect(() => {
    getHomeMembers()
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  const context = useContext(memberContext);
  let {homeMembers,getHomeMembers } = context;
  

  return (
    <div>
      <Nav />
      <div className="member_watford">
        <div className="row my-3 mx-3">
          <h2 align="center">Available Members</h2>
          {homeMembers.map((member) => {
            return (
              <div className="col-md-4 my-3" key={member._id}>
                <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..."> */}
                  <div className="card-body">
                    <h5 className="card-title text-center my-3">
                      {member.fullname} 
                    </h5>
                    <p className="card-text">
                      Family Name: {member.familyFullName}
                    </p>
                    <p className="card-text">
                      Family Relation: {member.familyRelation}
                    </p>
                    <p className="card-text">
                      Phone Number: {member.phoneNumber}
                    </p>
                    <p className="card-text">Address: {member.streetAddress}</p>
                    <p className="card-text">
                      Date of Birth: {member.dob.slice(0, 10)}
                    </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

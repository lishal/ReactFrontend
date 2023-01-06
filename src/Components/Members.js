import React, { useContext,useState ,useEffect} from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import memberContext from "../Context/Members/memberContext";

export default function Members() {

  useEffect(() => {
    getHomeMembers()

     // eslint-disable-next-line
}, [])
  const context = useContext(memberContext);
  let {homeMembers,getHomeMembers } = context;
  const [searchValue, setSearchValue] = useState("")
  
  const members=()=>{
    return homeMembers.filter(member=>member.fullname.toLowerCase().includes(searchValue.toLowerCase())||member.phoneNumber.includes(searchValue))
  }
  return (
    <div>
      <Nav />
      <div className="member_watford">
        <div className="row my-3 mx-3">
          <h2 align="center">Available Members</h2>
          <div className="watford_member_search d-flex justify-content-end" style={{width:"100%"}}>
            <label htmlFor="memberSearch" className="d-flex align-items-center mx-3" style={{fontSize:"1.5rem"}}>Search Members: </label>
          <input style={{width:"30%"}}  type="text" name="memberSearch" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search by name and Phonenumber"/>
          </div>
           {members().map((member) => {
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

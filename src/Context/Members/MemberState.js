import MemberContext from "./memberContext";
import React,{ useState }  from "react"; 

const MemberState = (props) => {
  const host = "http://localhost:5000";
  // const membersDefault = []

  const [members, setMembers] = useState([]);
  const [homeMembers, setHomeMembers] = useState([]);
  const [errors,setErrors]=useState([]);
  let [duplicateCheck,setDuplicateCheck]=useState([]);

  //Get All Members
  const getMembers= async()=>{
    const response = await fetch(`${host}/api/member/fetchallmembers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token"),
      }
    });
    const result = await response.json()
    setMembers(result.members)
    //  console.log(result.members)
    
  }

  //Get All Members for Home Page
  const getHomeMembers= async()=>{
    const response = await fetch(`${host}/api/member/fetchallmembershomepage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json()
     setHomeMembers(result.membersHome)
  }

  //Add Members
  const addMember = async(
    fullname,
    email,
    phoneNumber,
    streetAddress,
    address_nepal,
    dob,
    postalTown,
    postalCode,
    familyFullName,
    familyRelation,
    familydob,
    familyAddress,
    familyPhone,
  ) => {
  
    const member = {
      fullname: fullname[0],
      email: email[0],
      phoneNumber: phoneNumber[0],
      streetAddress: streetAddress[0],
      address_nepal: address_nepal[0],
      dob: dob[0],
      postalTown: postalTown[0],
      postalCode: postalCode[0],
      familyFullName: familyFullName[0],
      familyRelation: familyRelation[0],
      familydob: familydob[0],
      familyAddress: familyAddress[0],
      familyPhone: familyPhone[0]
      
      
        // fullname:"Annu Ramjali",
        // email:"test@gmail.com",
        // phoneNumber:"9867232445",
        // streetAddress:"Watford UK",
        // address_nepal:"Samakhushi, Kathmandu",
        // dob:"1999-07-20",
        // postalTown:"Samakhushi",
        // postalCode:"460032",
        // familyFullName:"Saroj Prasad Bhari",
        // familyRelation:"Father",
        // familydob:"1999-07-20",
        // familyAddress:"Samakhushi, Kathmandu",
        // familyPhone:"9867232568"
      
    };
    // console.log(memberJSON)
    //API CALLING
    const response = await fetch(`${host}/api/member/createMember`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        'Accept': 'application/json',
        "auth-token":localStorage.getItem("token"),
          "image":"image/png"
      },
      body: JSON.stringify(member),
    } 
    )
    
      
       const appendMember=await response.json();
        setErrors(appendMember.errors);
        if(appendMember.emailExist || appendMember.numberExist){
          setDuplicateCheck(appendMember)
        }
        else{
          setDuplicateCheck([])
          
        }
       

    //   if( appendMember.errors){
    //     setErrors([await appendMember.errors])
    //  }
    //  else{
    //    setErrors([])
    //  setMembers(members.concat(appendMember));
    //  }
   
    
  };
  //Edit Members
  const editMember = async (
    id,
    fullname,
    email,
    phoneNumber,
    streetAddress,
    address_nepal,
    dob,
    postalTown,
    postalCode,
    familyFullName,
    familyRelation,
    familydob,
    familyAddress,
    familyPhone
  ) => {
    // API CALL
    const response = await fetch(`${host}/api/member/updateMember/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
      body: JSON.stringify({fullname,
        email,
        phoneNumber,
        streetAddress,
        address_nepal,
        dob,
        postalTown,
        postalCode,
        familyFullName,
        familyRelation,
        familydob,
        familyAddress,
        familyPhone}),
    });
    
     let newMember=JSON.parse(JSON.stringify(members));
    for (let index = 0; index < newMember.length; index++) {
      const element = newMember[index];
      if (element._id === id) {
        newMember[index].fullname = fullname;
        newMember[index].email = email;
        newMember[index].phoneNumber = phoneNumber;
        newMember[index].streetAddress = streetAddress;
        newMember[index].address_nepal = address_nepal;
        newMember[index].dob = dob;
        newMember[index].postalTown = postalTown;
        newMember[index].postalCode = postalCode;
        newMember[index].familyFullName = familyFullName;
        newMember[index].familyRelation = familyRelation;
        newMember[index].familydob = familydob;
        newMember[index].familyAddress = familyAddress;
        newMember[index].familyPhone = familyPhone;
        break;
      }
    }
    setMembers(newMember);
  };

  //Delete Members
  const deleteMember = async(id) => {

    // Calling API
    const response = await fetch(`${host}/api/member/deleteMember/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
    });
    const newMember = members.filter((member) => {
      return member._id !== id;
    });
    setMembers(newMember);
  };

  return (
    <MemberContext.Provider
      value={{ members,homeMembers, errors,duplicateCheck ,getHomeMembers, addMember, deleteMember, editMember,getMembers }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};
export default MemberState;

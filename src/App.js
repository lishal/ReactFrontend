import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Members from "./Components/Members";
import Admin from "./AdminComponent/index";
import Client from "./Components/ClientLayout";
import Page404 from "./Components/Page404";
import AdminLogin from "./AdminComponent/AdminLogin";
import AddMember from "./AdminComponent/AddMember";
import MemberState from "./Context/Members/MemberState";

function App() {
  return (
    <div className="App">
      <MemberState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Client />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/members" element={<Members />}></Route>
            <Route exact path="/members" element={<Members />}></Route>
            <Route exact path="/adminLogin" element={<AdminLogin />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
            <Route exact path="/addmember" element={<AddMember />}></Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </MemberState>
    </div>
  );
}

export default App;

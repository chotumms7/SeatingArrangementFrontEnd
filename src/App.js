import Main from "./Components/Main";
import Gallery from "./Components/Gallery";
import Login from "./Components/Login";
import {Routes,Route,Navigate} from 'react-router-dom';
// import { Redirect } from "react-router-dom";
import Allot from "./Components/Allot";
import StudentReport from "./Components/StudentReport";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/main" />} />
    <Route path={"/login"} element={<Login />} />
    <Route path={"/gallery"} element={<Gallery />} />
    <Route path={"/main"} element={<Main />} />
    <Route path={"/allot"} element={<Allot />} />
    <Route path={"/studentreport"} element={<StudentReport/>} />
    {/* <Redirect to="/main"/> */}
    </Routes>
  );
}

export default App;

import Main from "./Components/Main";
import Gallery from "./Components/Gallery";
import Login from "./Components/Login";
import {Routes,Route,Navigate,useLocation} from 'react-router-dom';



import CourseCreation from "./Components/CourseCreation";
import Dashboard from "./Components/Dashboard";
import StudentLogin from "./Components/StudentLogin";
import CourseTable from "./Components/CourseTable";
import Floor from "./Components/Floor";
import Floor1 from "./Components/Floor1";
import Floor2 from "./Components/Floor2";
import StudentDetailsForm from "./Components/StudentDetailsForm";
import StudentDetailsReport from "./Components/StudentDetailsReport";
import DeleteCourse from "./Components/DeleteCourse";
import AllocatedList from "./Components/AllocatedList";




function App() {

  const location = useLocation();
  const selectedCourse = location.state ? location.state.selectedCourse : null;
  const floor = location.state ? location.state.floor : null;
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/main" />} />
    <Route path={"/login"} element={<Login />} />
    <Route path={"/gallery"} element={<Gallery />} />
    <Route path={"/main"} element={<Main />} />
    
   
    <Route path={"/coursecreation"} element={<CourseCreation/>} />
    <Route path={"/dashboard"} element={<Dashboard/>} />
    <Route path={"/studentlogin"} element={<StudentLogin/>} />
    <Route path={"/coursetable"} element={<CourseTable/>} />
    <Route path={"/floor"} element={<Floor/>} />
    <Route path={"/floor1"} element={<Floor1/>} />
    <Route path={"/floor2"} element={<Floor2/>} />
    <Route path={"/studentdetailsform"} element={<StudentDetailsForm selectedCourse={selectedCourse} floor={floor}/>} />
    <Route path={"/studentdetailsreport"} element={<StudentDetailsReport/>} />
    <Route path={"/deletecourse"} element={<DeleteCourse/>} />
    <Route path={"/allocatedlist"} element={<AllocatedList/>} />
    
   
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Help from "./Help";
import StudentManagement from "./StudentManagement";
import StudentForm from "./StudentForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/student" element={<StudentForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

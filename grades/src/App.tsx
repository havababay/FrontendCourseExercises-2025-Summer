import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Help from "./Help";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

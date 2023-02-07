import React from "react";
import BrandExample from "./pages/nav/BrandExample";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Edit from "./pages/editfolder/Edit";
import { useNavigate } from "react-router-dom";
import Footer from "./pages/footer/Footer";

const App = () => {
  const navigate = useNavigate();

  const handleNavClick = () => {
    navigate("/");
  };
  return (
    <div>
      <BrandExample onClick={handleNavClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

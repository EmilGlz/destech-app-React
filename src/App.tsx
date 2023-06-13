import React from "react";
import Navbar from "./components/navbar/Navbar";
import { navbarData } from "./constants/Consts";
import YourMentor from "./components/yourMentor/YourMentor";
import Contact from "./components/contactUs/Contact";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/noPage/NoPage";
import AboutUs from "./components/aboutUs/AboutUs";
import Popup from "./components/popup/Popup";

function App() {
  return (
    <>
      <Navbar links={navbarData} />
      <Routes>
        <Route path="contact" element={<Contact />} />
        <Route path="mentor" element={<YourMentor />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
export default App;

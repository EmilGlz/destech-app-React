import React from "react";
import Navbar from "./components/navbar/Navbar";
import { navbarData } from "./constants/Consts";
import YourMentor from "./components/yourMentor/YourMentor";
import Contact from "./components/contactUs/Contact";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/noPage/NoPage";
import AboutUs from "./components/aboutUs/AboutUs";
import WebDesign from "./components/webDesign/WebDesign";
import ProductDesign from "./components/productDesign/ProductDesign";

function App() {
  return (
    <>
      <Navbar links={navbarData} />
      {/* <ProductDesign /> */}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentor" element={<YourMentor />} />
        <Route path="/courses" element={<WebDesign />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
export default App;

import ProductDesign from "./components/productDesign/ProductDesign";
import YourMentor from "./components/yourMentor/YourMentor";
import WebDesign from "./components/webDesign/WebDesign";
import Contact from "./components/contactUs/Contact";
import Courses from "./components/courses/Courses";
import { Routes, Route } from "react-router-dom";
import { navbarData } from "./constants/Consts";
import Navbar from "./components/navbar/Navbar";
import NoPage from "./components/noPage/NoPage";
import React from "react";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <>
      <Navbar links={navbarData} />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentor" element={<YourMentor />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/product-dizayn" element={<ProductDesign />} />
        <Route path="/qrafik-dizayn" element={<WebDesign />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
export default App;

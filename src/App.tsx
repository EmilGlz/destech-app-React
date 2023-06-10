import React from "react";
import Navbar from "./components/navbar/Navbar";
import { navbarData } from "./constants/Consts";
import YourMentor from "./components/yourMentor/YourMentor";
import Contact from "./components/contactUs/Contact";

function App() {
  return (
    <>
      {<Navbar links={navbarData} />}
      {/* <YourMentor /> */}
      <Contact />
    </>
  );
}
export default App;

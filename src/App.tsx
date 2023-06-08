import React from "react";
import Navbar from "./components/navbar/Navbar";
import { navbarData } from "./constants/Consts";

function App() {
  return <>{<Navbar links={navbarData} />}</>;
}
export default App;

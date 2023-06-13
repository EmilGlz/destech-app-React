import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Popup from "../popup/Popup";

type NavbarProps = {
  links: { title: string; url: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [popup, setPopup] = useState(false);

  function eventListener() {
    setPopup((prevVal) => !prevVal);
  }

  function closePopup() {
    setPopup(false);
  }

  return (
    <div className="header">
      <div></div>
      <nav>
        <ul className="nav__links">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={eventListener}>Dərslərə Qoşul</button>
      {popup && <Popup closePopup={closePopup} />}
    </div>
  );
};

export default Navbar;

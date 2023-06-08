import React from "react";
import "./Navbar.css";

type NavbarProps = {
  links: { title: string; url: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <div className="header">
      <div></div>
      <nav>
        <ul className="nav__links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#">
        <button>Dərslərə Qoşul</button>
      </a>
    </div>
  );
};

export default Navbar;

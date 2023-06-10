import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
              <Link to={link.url}>
                <a>{link.title}</a>
              </Link>
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

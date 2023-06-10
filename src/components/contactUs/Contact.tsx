import React from "react";
import "./Contact.css";
import Map from "./map/Map";
const Contact = () => {
  return (
    <div className="about-container">
      <div className="div-contact-us">
        <h1 className="h1-contact-us">Bizimlə Əlaqə</h1>
        <img className="about-underline" src="underline.png"></img>
      </div>
      <div className="div-information">
        <div className="mail-info">
          <h2>Mail Adresi</h2>
          <p>destechedu@gmail.com</p>
        </div>
        <div className="phone-info">
          <h2>WhatsApp Dəstək 😜</h2>
          <p>+994 55 558 85 81</p>
        </div>
      </div>
      <div className="div-address">
        <h1>Ünvan</h1>
        <img className="about-underline" src="underline.png"></img>
      </div>
      <Map />
    </div>
  );
};
export default Contact;

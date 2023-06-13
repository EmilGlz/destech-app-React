import React, { Component } from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="div-map">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12150.3775588958!2d49.80287665!3d40.417835499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087af9f890515%3A0x405f9c293e527510!2sBaku%2Cavtova%C4%9Fzal!5e0!3m2!1sru!2saz!4v1686432961696!5m2!1sru!2saz"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default Map;

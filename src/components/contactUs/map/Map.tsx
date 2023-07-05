import React, { Component } from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="div-map">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4284905030495!2d49.85137057591145!3d40.377194958044704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sru!2saz!4v1688596494435!5m2!1sru!2saz"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default Map;

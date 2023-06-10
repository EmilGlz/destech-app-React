import React, { Component } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Map = () => {
  return (
    <div style={mapStyles}>
      <Wrapper apiKey={"AIzaSyAbEOVamjIfg8xyHEQQUL17qDSTAsG_edg"} />
    </div>
  );
};
export default Map;

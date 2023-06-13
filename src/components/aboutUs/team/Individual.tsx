import React from "react";
import "./Individual.css";
type IndividualProps = {
  data: {
    fullName: string;
    image: string;
    position: string;
  };
};
const Individual: React.FC<IndividualProps> = ({ data }) => {
  return (
    <div className="individual-container">
      <div className="circle">
        <img src={data.image} alt="from-backend" />
      </div>
      <p>{data.fullName}</p>
      <p className="position">{data.position}</p>
    </div>
  );
};
export default Individual;

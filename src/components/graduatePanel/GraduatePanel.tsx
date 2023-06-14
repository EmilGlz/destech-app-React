import React from "react";
import "./GraduatePanel.css";
type GraduateProps = {
  data: {
    fullName: string;
    image: string;
    jobTitle: string;
    description: string;
  };
};
const GraduatePanel: React.FC<GraduateProps> = ({ data }) => {
  return (
    <div className="graduate-panel">
      <img src={data.image}></img>
      <p className="graduate-name">{data.fullName}</p>
      <p className="graduate-job-title">{data.jobTitle}</p>
      <p className="graduate-description">{data.description}</p>
    </div>
  );
};
export default GraduatePanel;

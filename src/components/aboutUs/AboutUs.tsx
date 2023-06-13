import React from "react";
import { workersData } from "../../constants/Consts";
import Individual from "./team/Individual";

import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-description">
        <h1 className="aboutus-h1">Salam Destech-çi!</h1>
        <img className="underline" src="underline.png" alt="" />
        <p className="aboutus-p">
          Destech 2020-ci ildən fəaliyyət göstərməkdədir. İlk zamanlarda sadəcə
          tək bir ixtisas tədris olunurdusa artıq bu say gün getdikcə
          artmaqdadır.hal hazırda həm dizayn həm texnologiya sahəsində ilk
          interaktiv onlayntədrisi həyata keçirən platforma DesTechdir.
        </p>
        <h1 className="about-us-h1">+1000 tələbə 😜</h1>
        <h1 className="about-us-h1">+840 məzun ✌🏻</h1>
        <h1 className="about-us-h1">+780 işləyən tələbə 😌</h1>
      </div>
      <div className="image-container">
        <h1 className="image-h1">Komandamız</h1>
      </div>
      <div className="team-container">
        {workersData.map((item, index) => (
          <Individual key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
export default AboutUs;

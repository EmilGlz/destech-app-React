import React from "react";
import "./YourMentor.css";
import Form from "./form/Form";

const YourMentor = () => {
  return (
    <div className="container">
      {/* <img
        src="purple-gradient.png"
        alt="purple"
        className="static-image"
      ></img> */}
      <div className="about">
        <img className="photo" src="yourMentor.png"></img>
        <div className="description-container">
          <h1 className="title">Salam, Sənin mentorun!</h1>
          <img className="title-underline" src="underline.png"></img>
          <p className="description">
            Mentorun olaraq sənə karyeranda atacağın addımlarla bağlı
            Tövsiyyələrimizi, yönlədnirlmələrimizi edəcəyik! Qlobalda işləyən
            Tədrisçilərimizlə birlikdə güclü şrikətlərdə karyeranı davam etdirmə
            şansın olacaq!
          </p>
        </div>
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
};
export default YourMentor;

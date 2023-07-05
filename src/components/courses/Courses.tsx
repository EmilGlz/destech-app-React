import React, { useState } from "react";
import { countStats, thoughtsFromGraduates } from "../../constants/Consts";
import { supportTexts } from "../../constants/Consts";
import { courseNames } from "../../constants/Consts";
import "./Courses.css";
import StudentComment from "../studentComment/StudentComment";
import SendQuestionForm from "../sendQuestionForm/SendQuestionForm";
import BlueCube from "../blueCube/BlueCube";
import { useNavigate } from "react-router-dom";
import Popup from "../popup/Popup";

const Courses = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  function eventListener() {
    setPopup((prevVal) => !prevVal);
  }

  function closePopup() {
    console.log(popup);

    setPopup(false);
  }
  function getCourseName(courseName: string) {
    if (courseName === "Qrafik Dizayn") {
      navigate(`/qrafik-dizayn`);
    } else {
      navigate(`/product-dizayn`);
    }
  }

  return (
    <div className="container">
      <div className="courses-description">
        <h1 className="aboutus-h1">
          Təhsilinizdə və karyeranızda ən büyük dəstəkçiniz!
        </h1>
        <img className="underline" src="underline.png" alt="" />
        <p className="courses-p">
          Karyeranda özünü dizayn və texnologiya sahəsində görürsənsə o zaman bu
          tədrislər tam sənin üçündür.
        </p>
        <button className="courses-button" onClick={eventListener}>
          Indi başla!
        </button>
        {popup && <Popup closePopup={closePopup} />}
      </div>
      <div className="courses-stats">
        <h1 className="courses-stat">+{countStats.students} tələbə</h1>
        <h1 className="courses-stat">+{countStats.graduates} məzun</h1>
        <h1 className="courses-stat">
          +{countStats.workingStudents} işləyən tələbə
        </h1>
      </div>
      <div className="support-infos">
        {supportTexts.map((item, index) => (
          <div key={index} className="course-support-info">
            <img src={item.image} alt="logo"></img>
            <h1>{item.title}</h1>
            <p>{item.describtion}</p>
          </div>
        ))}
      </div>
      <div className="our-courses-title-countainer">
        <h1 className="our-courses-h1">Tədrislərimiz</h1>
        <img className="underline-our-courses" src="underline.png" alt="" />
      </div>
      <div className="course-names-container">
        {courseNames.map((item, index) => (
          <div key={index} className="course-name-square">
            <p className="course-name-p" onClick={() => getCourseName(item)}>
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="whatgraduatessay-container">
        <h1 className="whatgraduatessay-title question-title graduation-title-left">
          Tələbələrimizin rəyləri
        </h1>
        <div className="inner-container">
          <img className="gradient" src="purpleGradient.png"></img>
          <div className="whatgraduatessay-left">
            <StudentComment data={thoughtsFromGraduates[0]} />
          </div>
          <div className="whatgraduatessay-right">
            <StudentComment data={thoughtsFromGraduates[1]} />
          </div>
        </div>
        <div className="inner-container">
          <div className="whatgraduatessay-left-mid">
            <StudentComment data={thoughtsFromGraduates[0]} />
          </div>
          <div className="whatgraduatessay-right-left">
            <StudentComment data={thoughtsFromGraduates[1]} />
          </div>
        </div>
      </div>
      <div className="whatgraduatessay-mid">
        <StudentComment data={thoughtsFromGraduates[0]} />
      </div>

      <h1 className="question-answer-h1">
        Yeni karyeranda ilk addımı DesTech-də at!
      </h1>
      <div className="mid-blue-cube">
        <div className="cube-1">
          <BlueCube />
        </div>
        <div className="cube-2">
          <BlueCube />
        </div>
        <div className="right-blue-cube">
          <div className="cube-3">
            <BlueCube />
          </div>
          <div className="cube-4">
            <BlueCube />
          </div>
        </div>
      </div>

      <SendQuestionForm />
    </div>
  );
};
export default Courses;

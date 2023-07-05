import React from "react";
import "./WebDesign.css";
import { courseDates } from "../../constants/Consts";
import { whatIWillLearnInWebDesign } from "../../constants/Consts";
import { whoWillBeDestech } from "../../constants/Consts";
import { thoughtsFromGraduates } from "../../constants/Consts";
import LearningTopic from "../learningTopic/LearningTopic";
import GraduatePanel from "../graduatePanel/GraduatePanel";
import Faq from "../faq/Faq";
import SendQuestionForm from "../sendQuestionForm/SendQuestionForm";

const WebDesign = () => {
  const starCourseClicked = () => {
    console.log("A course is started!");
  };

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title-h1">Qrafik və Veb Dizayn</h1>
        <img className="boy-icon" src="boy-with-laptop.png"></img>
      </div>
      {courseDates.map((item, index) => (
        <div className="time-container">
          <div key={index} className="time-square">
            <p className="time-square-title">Tarix</p>
            <p className="time-square-content">{item.dates}</p>
          </div>
          <div key={index} className="time-square">
            <p className="time-square-title">Müddət</p>
            <p className="time-square-content">{item.period}</p>
          </div>
          <button
            onClick={starCourseClicked}
            className="time-square start-now-btn"
          >
            Indi başla!
          </button>
        </div>
      ))}
      <div className="whatisit-container">
        <h1 className="question-title">Nədir?</h1>
        <p>
          Gələcəyin və günün dünyasında bu ihtisas sahibləri həyat
          qurtarıcılardır! 😍
        </p>
        <p>
          Tədris programımız sayəsində sən də hiç bir əlavə biliyə ehtiyyac
          duymadan, bütün bilikləri mənimsəyəcək və karyerana bu yolda davam
          edəcəksən! 🤓
        </p>
      </div>
      <div className="whocanjoin-container">
        <h1 className="question-title">Kimlər iştirak edə bilər?</h1>
        <p>• Mütəxəssis programcı olmaz istəyənlər, 😎</p>
        <p>• Heç bir ön bilik tələb olunur 🤩</p>
        <p>• Bu dünyaya yeni addım atma istəyənlər 🥰</p>
        <p>• Riyaziyyat və ya yaşı mühəndis olmağınız ehtiyyac yoxdur😌</p>
      </div>
      <h1 className="question-title whatiwilllearn-title">Nələr öyrənəcəm?</h1>
      <div className="whatiwilllearn-container">
        {whatIWillLearnInWebDesign.map((item, index) => (
          <LearningTopic key={index} data={item} />
        ))}
      </div>
      <h1 className="question-title whatiwilllearn-title">
        Destech-çilər kimlər olacaq? 😍
      </h1>
      {whoWillBeDestech.map((item, index) => (
        <div key={index} className="whowillbedestech-container">
          <div className="whowillbedestech-profile">
            <div className="who-can-apply-circle">
              <img className="who-can-apply-individual" src={item.image}></img>
            </div>
            <p>{item.fullname}</p>
            <p>{item.jobTitle}</p>
            <a href={item.linkednURL}>
              <img className="linkedn-icon" src="linkednLogo.png"></img>
            </a>
          </div>
          <div className="whowillbedestech-content">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <div className="admission-process-container">
        <h1 className="question-title">Qəbul Prosesi</h1>
        <p className="admission-process-p">
          Qəbul prosesimiz aşağıdakı addımlardan ibarətdir. Biz təkcə tələbələri
          qəbul etmirik. Akademiyamızda hüquqşünas, rəssam, mühasib, bioloq və
          bir çox fərqli sahələrdən olan şəxsləri bir araya toplayan zəngin bir
          təhsil mühiti yaratmışıq. Karyeranızı bizimlə birgə dəyişmək üçün
          istəkli olmağınız kifayətdir.
        </p>
      </div>
      <div className="admission-ways">
        <div className="admission-way">
          <img src="online-admission.png"></img>
          <p>Onlayn Müraciət Et</p>
        </div>
        <div className="admission-way">
          <img src="meet-mentor.png"></img>
          <p>Mentor lə görüş</p>
        </div>
        <div className="admission-way">
          <img src="payment-method.png"></img>
          <p>Ödəniş növü və dərs vaxtını seç</p>
        </div>
        <div className="admission-way">
          <img src="take-exam.png"></img>
          <p>İmtahanda iştirak et</p>
        </div>
        <div className="admission-way">
          <img src="online-admission.png"></img>
          <p>Qeydiyyatdan keç!</p>
        </div>
      </div>
      <h1 className="question-title graduation-left-web-design">
        Məzunlarımızdan fikirlər 🎓
      </h1>
      <div className="whatgraduatessay-container-web-design">
        <div className="whatgraduatessay-left-web-design">
          <GraduatePanel data={thoughtsFromGraduates[0]} />
        </div>
        <div className="whatgraduatessay-right-web-design">
          <GraduatePanel data={thoughtsFromGraduates[1]} />
        </div>
      </div>

      <h1 className="question-title whatiwilllearn-title">
        Sizin suallarınızı cavabladıq!😍
      </h1>
      <div className="faq-container">
        <Faq />
      </div>
      <SendQuestionForm />
    </div>
  );
};
export default WebDesign;

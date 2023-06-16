import React from "react";
import "./ProductDesign.css";
import {
  courseDates,
  whatWillLearnInProductDesign,
} from "../../constants/Consts";
import { whoWillBeDestech } from "../../constants/Consts";
import { thoughtsFromGraduates } from "../../constants/Consts";
import LearningTopic from "../learningTopic/LearningTopic";
import GraduatePanel from "../graduatePanel/GraduatePanel";
import Faq from "../faq/Faq";
import SendQuestionForm from "../sendQuestionForm/SendQuestionForm";

const ProductDesign = () => {
  const starCourseClicked = () => {
    console.log("A course is started!");
  };

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title-h1">Product design</h1>
        <img className="boy-icon" src="girl-with-laptop.png"></img>
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
          İstifadəçi təcrübəsi dizaynının əsaslarını anlamaq, araşdırmanın nə
          vaxt və nə üçün lazım olduğunu, istifadəçiləri başa düşməyin nə üçün
          vacib olduğunu və istifadəçilər üçün empatiya yaratmağın yollarını
          öyrənmək istəyirsinizsə, bu kurs sizin üçündür!
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
        {whatWillLearnInProductDesign.map((item, index) => (
          <LearningTopic key={index} data={item} />
        ))}
      </div>
      <h1 className="question-title whatiwilllearn-title">
        Destech-çilər kimlər olacaq? 😍
      </h1>
      {whoWillBeDestech.map((item, index) => (
        <div key={index} className="whowillbedestech-container">
          <div className="whowillbedestech-profile">
            <div className="circle whowillbedestech-circle">
              <img src={item.image}></img>
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
      <div className="whatgraduatessay-container">
        <div className="whatgraduatessay-left">
          <h1 className="question-title graduation-title-left">
            Məzunlarımızdan fikirlər 🎓
          </h1>
          <GraduatePanel data={thoughtsFromGraduates[2]} />
        </div>
        <div className="whatgraduatessay-right">
          <GraduatePanel data={thoughtsFromGraduates[3]} />
        </div>
      </div>
      <h1 className="question-title whatiwilllearn-title">
        Sizin suallarınızı cavabladıq!😍
      </h1>
      <div className="faq-container">
        <Faq />
      </div>
      <div className="have-questions-container">
        <h1>Sualın var ?</h1>
        <img className="underline" src="underline.png" alt="" />
        <p>
          Aşağıdaki formu dolduraq, səninlə əlaqə yaradıb bütün suallarını
          cavablaya bilərik!
        </p>
      </div>
      <SendQuestionForm />
    </div>
  );
};
export default ProductDesign;

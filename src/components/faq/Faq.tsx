import React, { useState } from "react";
import "./Faq.css";
import { faqData } from "../../constants/Consts";

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="faq">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleToggle(index)}
        >
          <div className="faq-question">{faq.question}</div>
          <div
            className="faq-answer-container"
            style={{
              maxHeight: activeIndex === index ? "1000px" : "0px",
              transition:
                activeIndex === index ? "max-height 0.3s ease-in-out" : "none",
            }}
          >
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
          <img className="open-icon" src="open-question-icon.png"></img>
        </div>
      ))}
    </div>
  );
};

export default Faq;

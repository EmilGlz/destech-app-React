import React, { ChangeEvent, FormEvent, useState } from "react";
import "./SendQuestionForm.css";
interface MyFormState {
  name: string;
  email: string;
  phoneNumber: string;
  surname: string;
}

const SendQuestionForm = () => {
  const [formState, setFormState] = useState<MyFormState>({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    alert(formState.email);
    e.preventDefault();
  };

  return (
    <div className="test">
      <div className="have-questions-container">
        <h1>Sualın var ?</h1>
        <img className="underline" src="underline.png" alt="" />
        <p>
          Aşağıdaki formu dolduraq, səninlə əlaqə yaradıb bütün suallarını
          cavablaya bilərik!
        </p>
      </div>
      <div className="form-container">
        <form className="send-question-form" onSubmit={handleSubmit}>
          <input
            className="question-input-send-question"
            placeholder="Ad"
            type="text"
            id="name"
            value={formState.name}
            onChange={handleInputChange}
          />

          <input
            className="question-input-send-question"
            placeholder="Soyad"
            type="text"
            id="surname"
            value={formState.surname}
            onChange={handleInputChange}
          />

          <input
            className="question-input-send-question"
            placeholder="Email"
            type="text"
            id="email"
            value={formState.email}
            onChange={handleInputChange}
          />

          <input
            className="question-input-send-question"
            placeholder="Telefon nömrəsi"
            type="text"
            id="number"
            value={formState.phoneNumber}
            onChange={handleInputChange}
          />
          <div className="btn-container">
            <button className="submit-form" type="submit">
              Müraciət et!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SendQuestionForm;

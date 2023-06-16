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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="question-input"
              placeholder="Ad"
              type="text"
              id="name"
              value={formState.name}
              onChange={handleInputChange}
            />

            <input
              className="question-input"
              placeholder="Soyad"
              type="text"
              id="surname"
              value={formState.surname}
              onChange={handleInputChange}
            />

            <input
              className="question-input"
              placeholder="Email"
              type="text"
              id="email"
              value={formState.email}
              onChange={handleInputChange}
            />

            <input
              className="question-input"
              placeholder="Telefon nömrəsi"
              type="text"
              id="number"
              value={formState.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <button className="submit-form" type="submit">
            Müraciət et!
          </button>
        </form>
      </div>
    </div>
  );
};
export default SendQuestionForm;

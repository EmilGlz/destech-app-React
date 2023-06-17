import React, { ChangeEvent, FormEvent, useState } from "react";
import "./Form.css";
import { LocalUrl, Url } from "../../../constants/Url";
interface MyFormState {
  name: string;
  email: string;
  number: string;
  date: string;
  hour: string;
}

const Form = () => {
  const [formState, setFormState] = useState<MyFormState>({
    name: "",
    email: "",
    number: "",
    date: "",
    hour: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const dataForMail = {
      to: formState.email,
      subject: "the first mail",
      body: formState,
    };
    fetch(LocalUrl + "api/main", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cache: "no-cache",
        "X-Requested-With": "rest",
      },

      body: JSON.stringify(dataForMail),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="form-container">
      <div className="content">
        <h1>Sənin Mentorun 😍</h1>
        <p className="description">
          Sizə uyğun olan zamanı seçdikdən sonra mentorumuz qısa zamanda sizinlə
          əlaqə saxlayaraq onlayn şəkildə suallarınızı cavbalayacaq
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Ad soyad"
            type="text"
            id="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            type="text"
            id="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            placeholder="Telefon nömrəsi"
            type="text"
            id="number"
            value={formState.number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <select
            id="date"
            value={formState.date}
            onChange={handleDropdownChange}
          >
            <option value="">Sizə uyğun gün</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div>
          <select
            id="hour"
            value={formState.hour}
            onChange={handleDropdownChange}
          >
            <option value="">Sizə uyğun saat</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <button className="submit-form" type="submit">
          Göndər
        </button>
      </form>
      <p className="p-link">
        Daxil olmaqla siz{" "}
        <a href="">Destech Gizlilik Siyasəti və İstifadə Şərtləri </a>ilə
        razılaşırsınız.
      </p>
    </div>
  );
};
export default Form;

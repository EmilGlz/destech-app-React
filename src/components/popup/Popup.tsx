import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./Popup.css";

interface MyFormState {
  name: string;
  email: string;
  number: string;
  speciality: string;
}

type PopupProps = {
  closePopup: () => void;
};

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  const [formState, setFormState] = useState<MyFormState>({
    name: "",
    email: "",
    number: "",
    speciality: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleSubmit = (e: React.FormEvent) => {
    alert(formState.email);
  };

  return (
    <div onClick={closePopup} className="popup-background">
      <section onClick={handleChildClick} className="popup-container">
        <div className="content">
          <h1 className="h1-popup">Qeydiyyatdan keç 😍</h1>
          <p className="description">
            Dərslərimizə qeydiyyatdan keçdikdən sonra Əməkdaşlarımız qısa
            zamanda sizinlə əlaqə saxlayacaq
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            id="name"
            className="name"
            placeholder="Ad soyad"
            type="text"
            value={formState.name}
            onChange={handleInputChange}
          />
          <input
            id="email"
            placeholder="Email"
            type="text"
            value={formState.email}
            onChange={handleInputChange}
          />
          <input
            id="number"
            className="number"
            placeholder="Telefon nömrəsi"
            type="text"
            value={formState.number}
            onChange={handleInputChange}
          />
          <select
            id="speciality"
            className="speciality"
            value={formState.speciality}
            onChange={handleDropdownChange}
          >
            <option value="Almaq istədiyin tədris">
              Almaq istədiyin tədris
            </option>
            <option value="Qrafik izayn">Qrafik izayn</option>
            <option value="UX/UI Dizayn">UX/UI Dizayn</option>
            <option value="Proqramlaşdırma">Proqramlaşdırma</option>
          </select>
          <button className="submit-popup" type="submit">
            Qeydiyyatdan keç!
          </button>
        </form>

        <p className="p-link">
          Daxil olmaqla siz{" "}
          <Link to="/gizlilik-siyaseti">Destech Gizlilik Siyasəti</Link> və{" "}
          <Link to="/istifade-sertleri">İstifadə Şərtləri</Link> ilə
          razılaşırsınız.
        </p>
      </section>
    </div>
  );
};

export default Popup;

import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // В зависимости от значение (true or false)
  // показываем или убираем надпись об успешной регистрации
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailNameInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  // Убираем перезагрузку браузера и показываем
  // надпись об успешной регистрации
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/*
          Если все поля заполнены и нажата кнопка регистрации,
          то показываем сообщение об успешной регистрации
        */}
        {submitted && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Показываем надпись, если поле не заполнено */}
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Показываем надпись, если поле не заполнено */}
        {submitted && !values.firstName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}
        <input
          onChange={handleEmailNameInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Показываем надпись, если поле не заполнено */}
        {submitted && !values.firstName ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

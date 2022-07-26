import React, { useState } from "react";
import { Button } from "@mui/material";

import "./login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "gianpinheiro1@hotmail.com",
      password: "pass1",
    },
    {
      username: "admin@plasmap.com",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  var logged = localStorage.getItem("isLogged");

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const generateLogin = () => {
    localStorage.setItem("isLogged", true);
  };
  const logout = () => {
    localStorage.setItem("isLogged", false);
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Senha </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Acessar</div>
        {isSubmitted ? (
          <div>
            User is successfully logged in
            <Button
              color="primary"
              onClick={() => {
                logout();
                logged = false;
              }}
              renderForm
            >
              Sair
            </Button>
          </div>
        ) : (
          renderForm
        )}
        {isSubmitted ? generateLogin() : console.log("offline")}
      </div>
    </div>
  );
}

export default Login;

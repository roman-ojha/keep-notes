import React, { useState } from "react";
import "./StyleRegisterPage.css";
import { NavLink } from "react-router-dom";
import Registration_image from "../image/Registration.png";
import PopUpMessage from "./PopUpMessage";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const history = useHistory();
  const [popUpMessage, setpopUpMessage] = useState({
    message: "",
    type: "",
    visible: false,
  });
  const [userRegisterData, setUserRegisterData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const getUserRegiserData = (e) => {
    let { name, value } = e.target;
    setUserRegisterData({ ...userRegisterData, [name]: value });
  };
  const getRegister = async (e) => {
    e.preventDefault();
    try {
      const { username, email, phone, password, cpassword } = userRegisterData;
      const resUserData = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, phone, password, cpassword }),
      });
      const userData = await resUserData.json();
      if (resUserData.status != 201) {
        console.log(userData.error);
        setpopUpMessage({
          message: userData.error,
          type: "error",
          visible: true,
        });
        var setPopInterval = setInterval(() => {
          setpopUpMessage({
            message: userData.error,
            type: "error",
            visible: false,
          });
          clearInterval(setPopInterval);
        }, 1000);
      } else {
        console.log(userData.message);
        setpopUpMessage({
          message: userData.message,
          type: "message",
          visible: true,
        });
        setUserRegisterData({
          username: "",
          email: "",
          phone: "",
          password: "",
          cpassword: "",
        });
        history.push("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="register_body">
        <PopUpMessage getMessage={popUpMessage} />
        <div className="register_container">
          <h1 className="signup_text">Sign up</h1>
          <form method="POST" className="register_form">
            <div className="form_group">
              <input
                className="form_input"
                type="text"
                placeholder="UserName"
                name="username"
                value={userRegisterData.username}
                onChange={getUserRegiserData}
              ></input>
            </div>
            <div className="form_group">
              <input
                className="form_input"
                type="email"
                placeholder="Email"
                name="email"
                value={userRegisterData.email}
                onChange={getUserRegiserData}
              ></input>
            </div>
            <div className="form_group">
              <input
                className="form_input"
                type="number"
                placeholder="Phone"
                name="phone"
                value={userRegisterData.phone}
                onChange={getUserRegiserData}
              ></input>
            </div>
            <div className="form_group"></div>
            <div className="form_group">
              <input
                className="form_input"
                type="password"
                placeholder="Password"
                name="password"
                value={userRegisterData.password}
                onChange={getUserRegiserData}
              ></input>
            </div>
            <div className="form_group">
              <input
                className="form_input"
                type="password"
                placeholder="Conform Password"
                name="cpassword"
                value={userRegisterData.cpassword}
                onChange={getUserRegiserData}
              ></input>
            </div>
            <div className="form_group ">
              <input
                className="form_button"
                type="submit"
                name="signup"
                value="register"
                onClick={getRegister}
              ></input>
            </div>
          </form>
          <div className="signup_image_div">
            <figure>
              <img
                className="signup_image"
                src={Registration_image}
                alt="registration pic"
              ></img>
            </figure>
            <NavLink to="/signin" className="signup_image_link">
              I am already registered
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

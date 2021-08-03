import React from "react";
import "./StyleRegisterPage.css";
import { NavLink } from "react-router-dom";
import Registration_image from "../image/Registration.png";

const RegisterPage = () => {
  return (
    <>
      <div className="register_body">
        <div className="register_container">
          <h1 className="signup_text">Sign up</h1>
          <form method="POST" className="register_form">
            <div className="form_group">
              <label htmlFor="name">
                <i className="zmdi zmdi-account"></i>
              </label>
              <input
                className="form_input"
                type="text"
                placeholder="Your Name"
              ></input>
            </div>
            <div className="form_group">
              <label htmlFor="email">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                className="form_input"
                type="email"
                placeholder="Your Email"
              ></input>
            </div>
            <div className="form_group">
              <label htmlFor="phone">
                <i className="zmdi zmdi-phone-in-talk"></i>
              </label>
              <input
                className="form_input"
                type="number"
                placeholder="Your Phone"
              ></input>
            </div>
            <div className="form_group">
              <label htmlFor="work">
                <i className="zmdi zmdi-slideshow"></i>
              </label>
              <input
                className="form_input"
                type="text"
                placeholder="Your Profession"
              ></input>
            </div>
            <div className="form_group">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                className="form_input"
                type="password"
                placeholder="Your Password"
              ></input>
            </div>
            <div className="form_group">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                className="form_input"
                type="password"
                placeholder="Conform Password"
              ></input>
            </div>
            <div className="form_group ">
              <input
                className="form_button"
                type="submit"
                name="signup"
                className="form-submit"
                value="register"
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

import React from "react";
import "./StyleSignInPage.css";
import NoteIcon from "@material-ui/icons/Note";
import { NavLink } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <div id="SignIn_Page">
        <div id="SignIn_Page_Container">
          <div id="SignIn_Page_Logo_and_Title">
            <NoteIcon style={{ fontSize: "50px" }} id="SignIn_Page_NoteIcon" />
            <h1 id="SignIn_Page_KeepNote_Title">Keep Note</h1>
          </div>
          <h2 id="SignIn_Page_SignIn_Title">Sign in</h2>
          <form id="SignIn_Page_Form">
            <input
              type="email"
              class="SignIn_Page_Input_Field"
              placeholder="Email"
            />
            <input
              type="password"
              class="SignIn_Page_Input_Field"
              placeholder="Password"
            />
            <input
              type="submit"
              value="Sign in"
              id="SignIn_Page_SignIn_Button"
            />
            <NavLink id="SizeIn_Page_CreateAccount_Button" to="/register">
              Create Account
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;

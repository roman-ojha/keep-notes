import React, { useState } from "react";
import "./StyleSignInPage.css";
import NoteIcon from "@material-ui/icons/Note";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import PopUpMessage from "./PopUpMessage";

const SignInPage = () => {
  const [userSignInData, setuserSignInData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const [popUpMessage, setpopUpMessage] = useState({
    message: "",
    type: "",
    visible: false,
  });
  const getUserSignInData = (event) => {
    let { name, value } = event.target;
    setuserSignInData({
      ...userSignInData,
      [name]: value,
    });
  };
  const getSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = userSignInData;
    const resUserData = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const userData = await resUserData.json();
    if (resUserData.status == 400 || !userData) {
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
      setuserSignInData({
        email: "",
        password: "",
      });
      history.push("/u/notes");
    }
  };
  return (
    <>
      <div id="SignIn_Page">
        <PopUpMessage getMessage={popUpMessage} />
        <div id="SignIn_Page_Container">
          <div id="SignIn_Page_Logo_and_Title">
            <NoteIcon style={{ fontSize: "50px" }} id="SignIn_Page_NoteIcon" />
            <h1 id="SignIn_Page_KeepNote_Title">Keep Note</h1>
          </div>
          <h2 id="SignIn_Page_SignIn_Title">Sign in</h2>
          <form id="SignIn_Page_Form">
            <input
              type="email"
              className="SignIn_Page_Input_Field"
              placeholder="Email"
              name="email"
              value={userSignInData.gmail}
              onChange={getUserSignInData}
            />
            <input
              type="password"
              className="SignIn_Page_Input_Field"
              placeholder="Password"
              name="password"
              value={userSignInData.password}
              onChange={getUserSignInData}
            />
            <input
              type="submit"
              value="Sign in"
              id="SignIn_Page_SignIn_Button"
              onClick={getSignIn}
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

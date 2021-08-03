import React from "react";
import UserImage from "../image/UserImg.png";
import "./StyleUserAccount.css";
import { NavLink } from "react-router-dom";

const UserAccount = () => {
  return (
    <>
      <div id="UserAccount_Container">
        <img src={UserImage} id="UserAccount_UserImage" />
        <div id="UserAccount_UserInformation">
          <p id="UserAccount_userName">Roman</p>
          <p id="UserAccount_userEmail">razzroman@gmai.com</p>
        </div>
        <input
          type="submit"
          id="UserAccount_Manage_Account_Button"
          value="Manage Your Account"
        />
        <div id="UserAccount_SignOut_Container">
          <div id="UserAccount_SignOut_Button_Outline">
            <NavLink id="UserAccount_SignOut_Button" to="/logout">
              Sign Out Account
            </NavLink>
          </div>
          {/* <button ></button> */}
        </div>
        <p id="UserAccount_PrivacyPolicy">Privacy Policy * Terms of Service</p>
      </div>
    </>
  );
};

export default UserAccount;

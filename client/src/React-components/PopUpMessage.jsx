import React from "react";
import "./StylePopUpMessage.css";

const PopUpMessage = (props) => {
  if (document.getElementById("PopUp_Message_Container")) {
    if (props.getMessage.type == "message") {
      document.getElementById("PopUp_Message_Container").style.backgroundColor =
        "#b2ffb2";
    } else if (props.getMessage.type == "error") {
      document.getElementById("PopUp_Message_Container").style.backgroundColor =
        "rgb(255 187 187)";
    }
    if (props.getMessage.visible == true) {
      document.getElementById("PopUp_Message_Container").style.visibility =
        "visible";
    } else if (props.getMessage.visible == false) {
      document.getElementById("PopUp_Message_Container").style.visibility =
        "hidden";
    }
  }

  return (
    <>
      <div id="PopUp_Message_Container">
        <h3 id="PopUp_Message">{props.getMessage.message}</h3>
      </div>
    </>
  );
};

export default PopUpMessage;

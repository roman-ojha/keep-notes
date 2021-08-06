import React, { useState } from "react";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import DeleteIcon from "@material-ui/icons/Delete";

const NoteCard = (props) => {
  const RenderNote = () => {
    if (props.title === "" && props.note === "") {
      return (
        <>
          <h2 className="Card_Empty_Note">Empty note</h2>
        </>
      );
    } else {
      return (
        <>
          <div className="Card_Title_Outline">
            <p className="Card_Title hoverInner">{props.title}</p>
          </div>
          <div className="Card_Note_Outline">
            <p className="Card_Notes hoverInner">{props.note}</p>
          </div>
        </>
      );
    }
  };
  const [cardHoverEvent, setCardHoverEvent] = useState("hidden");
  const cardOulineHoverEvent = (event) => {
    let getCardElement = event.target;
    if (getCardElement.className === "Card_Outline") {
    } else {
      getCardElement = getCardElement.parentElement.parentElement;
    }
    setCardHoverEvent("visible");
    try {
      getCardElement.querySelector(
        ".Card_Note_DeleteNote_Outline"
      )[0].style.visibility = `${cardHoverEvent}`;
    } catch (err) {}
  };
  const cardOulineLeaveEvent = (event) => {
    let getCardElement = event.target;
    if (getCardElement.className === "Card_Outline") {
    } else {
      getCardElement = getCardElement.parentElement.parentElement;
    }
    setCardHoverEvent("hidden");
    try {
      getCardElement.querySelector(
        ".Card_Note_DeleteNote_Outline"
      )[0].style.visibility = `${cardHoverEvent}`;
    } catch (err) {}
  };
  const deleteNote = async (event) => {
    let getNoteId = { id: 0 };
    if (event.target.className !== "Card_Note_DeleteNote_Outline") {
      getNoteId.id = event.target.parentElement.parentElement.id;
    } else {
      getNoteId.id = event.target.id;
    }
    const res = await fetch("/u/deleteNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getNoteId),
    });
    if (res.status === 200) {
      props.updateNotes();
    }
  };
  return (
    <>
      <div
        className="Card_Outline"
        style={{ backgroundColor: props.color }}
        onMouseOver={cardOulineHoverEvent}
        onMouseLeave={cardOulineLeaveEvent}
      >
        <RenderNote />
        <div
          className="Card_Note_DeleteNote_Outline"
          style={{ visibility: cardHoverEvent }}
          onClick={deleteNote}
          id={props.id}
        >
          <DeleteIcon className="Card_Note_DeleteNote_icon hoverInner" />
        </div>
        <div className="Card_Note_Icon_Container">
          <div className="MaxView_TakingNote_Icons_Outline hoverInner">
            <AddAlertOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>
          <div className="MaxView_TakingNote_Icons_Outline hoverInner">
            <GroupAddOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>
          <div className="MaxView_TakingNote_Icons_Outline hoverInner">
            <ColorLensOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>

          <div className="MaxView_TakingNote_Icons_Outline hoverInner">
            <ArchiveOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>
          <div className="MaxView_TakingNote_Icons_Outline hoverInner">
            <MoreVertOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCard;

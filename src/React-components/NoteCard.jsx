import React from "react";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";

const NoteCard = (props) => {
  const RenderNote = () => {
    if (props.title === "" && props.note === "") {
      return (
        <>
          <h2 id="Card_Empty_Note">Empty note</h2>
        </>
      );
    } else {
      return (
        <>
          <div id="Card_Title_Outline">
            <p id="Card_Title">{props.title}</p>
          </div>
          <div className="Card_Note_Outline">
            <p id="Card_Notes">{props.note}</p>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div id="Card_Outline" style={{ backgroundColor: props.color }}>
        <RenderNote />
        <div id="Card_Note_Icon_Container">
          <div className="MaxView_TakingNote_Icons_Outline">
            <AddAlertOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>
          <div className="MaxView_TakingNote_Icons_Outline">
            <GroupAddOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>
          <div className="MaxView_TakingNote_Icons_Outline">
            <ColorLensOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>

          <div className="MaxView_TakingNote_Icons_Outline">
            <ArchiveOutlinedIcon
              className="MaxView_TakingNote_Icons Card_Notes_Icons"
              style={{ fontSize: "20px" }}
            />
          </div>
          <div className="MaxView_TakingNote_Icons_Outline">
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

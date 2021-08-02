import React, { useState } from "react";
import "./StyleNotePage.css";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import NoteCard from "./NoteCard";
import CheckIcon from "@material-ui/icons/Check";

const NotesPage = () => {
  if (JSON.parse(localStorage.getItem("notes")) == null) {
    localStorage.setItem("notes", JSON.stringify([]));
  }
  let keygenerator = JSON.parse(localStorage.getItem("notes")).length + 1;
  let notesStorage = JSON.parse(localStorage.getItem("notes"));
  const [swapTakingNote, updateSwapTakingNote] = useState("min");

  const MinTakingNote = () => {
    return (
      <>
        <div
          id="TakingNote_Outline_MinView"
          onClick={() => {
            updateSwapTakingNote("max");
          }}
        >
          <form>
            <input
              type="text"
              id="MinView_TakingNote_Input_Field"
              placeholder="Take a note..."
            />
          </form>
          <div className="MinView_TakingNote_Icons_Outline">
            <CheckBoxOutlinedIcon
              className="MinView_TakingNote_Icons"
              id="MinView_TakingNote_List"
              style={{ fontSize: "25px" }}
            />
          </div>
          <div className="MinView_TakingNote_Icons_Outline">
            <BrushOutlinedIcon
              className="MinView_TakingNote_Icons"
              id="MinView_TakingNote_With_Drawing"
              style={{ fontSize: "25px" }}
            />
          </div>
          <div className="MinView_TakingNote_Icons_Outline">
            <ImageOutlinedIcon
              className="MinView_TakingNote_Icons"
              id="MinView_TakingNote_With_Image"
              style={{ fontSize: "25px" }}
            />
          </div>
        </div>
      </>
    );
  };

  const MaxTakingNote = () => {
    const [getMaxNote, updateMaxNote] = useState({
      key: keygenerator,
      title: "",
      note: "",
      color: "white",
    });
    const getNoteFunction = (event) => {
      let { name, value } = event.target;
      updateMaxNote((preValue) => {
        if (name === "title") {
          return {
            key: keygenerator,
            title: value,
            note: preValue.note,
            color: "white",
          };
        } else if (name === "note") {
          return {
            key: keygenerator,
            title: preValue.title,
            note: value,
            color: "white",
          };
        }
      });
    };
    const saveNote = (noteValue) => {
      notesStorage = JSON.parse(localStorage.getItem("notes"));
      notesStorage.unshift(noteValue);
      localStorage.setItem("notes", JSON.stringify(notesStorage));
    };
    const ColorComponent = (props) => {
      const CheckColordBox = () => {
        if (props.color === getMaxNote.color) {
          return (
            <>
              <CheckIcon />;
            </>
          );
        } else {
          return (
            <>
              <CheckIcon style={{ visibility: "hidden" }} />
            </>
          );
        }
      };
      return (
        <>
          <div
            id="ColorComponent_Container"
            style={{ backgroundColor: props.color }}
            onClick={() => {
              document.getElementById(
                "MaxView_TakingNote_Outline"
              ).style.backgroundColor = props.color;
              document.getElementById(
                "MaxView_TakingNote_Title_InputField"
              ).style.backgroundColor = props.color;
              document.getElementById(
                "MaxView_TakingNote_Note_Inputfield"
              ).style.backgroundColor = props.color;
              updateMaxNote((preValue) => {
                return {
                  key: keygenerator,
                  title: preValue.title,
                  note: preValue.note,
                  color: props.color,
                };
              });
            }}
          >
            <CheckColordBox />
          </div>
        </>
      );
    };
    const ColorPicker = () => {
      return (
        <>
          <div id="Color_Picker_Container" style={{ visibility: "hidden" }}>
            <div>
              <ColorComponent color="white" />
              <ColorComponent color="rgb(155 218 155)" />
              <ColorComponent color=" #dea2de" />
            </div>
            <div>
              <ColorComponent color=" rgb(255 103 103)" />
              <ColorComponent color="#58d0d0" />
              <ColorComponent color="pink" />
            </div>
            <div>
              <ColorComponent color="#ffcc6f" />
              <ColorComponent color="#c0c0fd" />
              <ColorComponent color="rgb(240 167 253)" />
            </div>
            <div>
              <ColorComponent color="#e8e807" />
              <ColorComponent color="rgb(142 142 255)" />
              <ColorComponent color="rgb(202 202 202)" />
            </div>
          </div>
          ;
        </>
      );
    };
    const openColorPicker = () => {
      document.getElementById("Color_Picker_Container").style.visibility =
        "visible";
    };
    const closeColorPicker = () => {
      document.getElementById("Color_Picker_Container").style.visibility =
        "hidden";
    };
    return (
      <>
        <div id="MaxView_TakingNote_Outline">
          <form>
            <div id="Maxview_TakingNote_Title_Outline">
              <input
                id="MaxView_TakingNote_Title_InputField"
                type="text"
                placeholder="Title"
                name="title"
                onChange={getNoteFunction}
                value={getMaxNote.title}
              />

              <div className="MaxView_TakingNote_Icons_Outline">
                <PinDropOutlinedIcon className="MaxView_TakingNote_Icons" />
              </div>
            </div>
            <input
              id="MaxView_TakingNote_Note_Inputfield"
              type="text"
              placeholder="Take a note..."
              name="note"
              onChange={getNoteFunction}
              value={getMaxNote.note}
              autoFocus
            />
            <div id="MaxView_TakingNote_Icon_Container">
              <div className="MaxView_TakingNote_Icons_Outline">
                <AddAlertOutlinedIcon className="MaxView_TakingNote_Icons" />
              </div>
              <div className="MaxView_TakingNote_Icons_Outline">
                <GroupAddOutlinedIcon className="MaxView_TakingNote_Icons" />
              </div>
              <div
                className="MaxView_TakingNote_Icons_Outline"
                onMouseEnter={openColorPicker}
                onMouseLeave={closeColorPicker}
              >
                <ColorPicker />
                <ColorLensOutlinedIcon className="MaxView_TakingNote_Icons" />
              </div>

              <div className="MaxView_TakingNote_Icons_Outline">
                <ArchiveOutlinedIcon className="MaxView_TakingNote_Icons" />
              </div>
              <div className="MaxView_TakingNote_Icons_Outline">
                <MoreVertOutlinedIcon className="MaxView_TakingNote_Icons" />
              </div>
              <div className="MaxView_TakingNote_Icons_Outline">
                <UndoOutlinedIcon className="MaxView_TakingNote_Icons" />
              </div>
              <div className="MaxView_TakingNote_Icons_Outline">
                <RedoOutlinedIcon className="MaxView_TakingNote_Icons" />
              </div>
              <div
                className="MaxView_TakingNote_Button_Outline"
                id="MaxView_TakingNote_Add_Button_Outline"
                onClick={() => {
                  updateSwapTakingNote("min");
                  saveNote(getMaxNote);
                  keygenerator++;
                }}
              >
                <h3 className="MaxView_TakingNote_Button">Add</h3>
              </div>
              <div
                className="MaxView_TakingNote_Button_Outline"
                id="MaxView_TakingNote_Close_Button_Outline"
                onClick={() => {
                  updateSwapTakingNote("min");
                }}
              >
                <h3 className="MaxView_TakingNote_Button">Close</h3>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
  const SwapNoteView = () => {
    if (swapTakingNote === "min") {
      return (
        <>
          <MinTakingNote />
        </>
      );
    } else if (swapTakingNote === "max") {
      return (
        <>
          <MaxTakingNote />
        </>
      );
    }
  };

  return (
    <>
      <div id="NotePage_Container">
        <SwapNoteView />
        <div id="NotePage_Card_Container">
          {notesStorage.map((value, index) => {
            return (
              <NoteCard
                key={value.key}
                title={value.title}
                note={value.note}
                color={value.color}
              />
            );
          })}
        </div>
        <form></form>
      </div>
    </>
  );
};

export default NotesPage;

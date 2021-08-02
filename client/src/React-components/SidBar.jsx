import React, { useState } from "react";
import "./StyleSideBar.css";
import NotesIcon from "@material-ui/icons/Notes";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditIcon from "@material-ui/icons/Edit";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  let SideBar_Content_Color = "#eec041";
  return (
    <>
      <div id="SideBar_Container">
        <NavLink to="/notes">
          <div
            className="SideBar_Content_Outline"
            id="SideBar_Notes_Outline"
            style={{ backgroundColor: `${SideBar_Content_Color}` }}
            onClick={() => {
              for (let i = 0; i < 5; i++) {
                if (i === 0) {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = `${SideBar_Content_Color}`;
                } else {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = "";
                }
              }
            }}
          >
            <NotesIcon
              className="SideBar_Logo"
              id="SideBar_Notes_Icon"
              style={{ fontSize: "30px" }}
            />
            <h3 className="SideBar_Lebal" id="SideBar_Notes_Lebal">
              Notes
            </h3>
          </div>
        </NavLink>
        <NavLink to="/reminders">
          <div
            className="SideBar_Content_Outline"
            id="SideBar_Reminder_Outline"
            onClick={() => {
              for (let i = 0; i < 5; i++) {
                if (i === 1) {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = `${SideBar_Content_Color}`;
                } else {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = "";
                }
              }
            }}
          >
            <NotificationsIcon
              className="SideBar_Logo"
              id="SideBar_Reminder_Icon"
              style={{ fontSize: "30px" }}
            />
            <h3 className="SideBar_Lebal" id="SideBar_Reminder_Lebal">
              Reminders
            </h3>
          </div>
        </NavLink>
        <NavLink to="/editlabels">
          <div
            className="SideBar_Content_Outline"
            id="SideBar_EditLabels_Outline"
            name="editlabels"
            onClick={() => {
              for (let i = 0; i < 5; i++) {
                if (i === 2) {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = `${SideBar_Content_Color}`;
                } else {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = "";
                }
              }
            }}
          >
            <EditIcon
              className="SideBar_Logo"
              style={{ fontSize: "30px" }}
              id="SideBar_EditLabels_Icon"
            />
            <h3 className="SideBar_Lebal" id="SideBar_EditLabels_Lebal">
              Edit Labels
            </h3>
          </div>
        </NavLink>
        <NavLink to="/archive">
          <div
            className="SideBar_Content_Outline"
            id="SideBar_Archive_Outline"
            name="archive"
            onClick={() => {
              for (let i = 0; i < 5; i++) {
                if (i === 3) {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = `${SideBar_Content_Color}`;
                } else {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = "";
                }
              }
            }}
          >
            <ArchiveIcon
              className="SideBar_Logo"
              id="SideBar_Archive_Icon"
              style={{ fontSize: "30px" }}
            />
            <h3 className="SideBar_Lebal" id="SideBar_Archive_Lebal">
              Archive
            </h3>
          </div>
        </NavLink>
        <NavLink to="/trash">
          <div
            className="SideBar_Content_Outline"
            id="SideBar_Trash_Outline"
            name="trash"
            onClick={() => {
              for (let i = 0; i < 5; i++) {
                if (i === 4) {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = `${SideBar_Content_Color}`;
                } else {
                  document.getElementsByClassName("SideBar_Content_Outline")[
                    i
                  ].style.backgroundColor = "";
                }
              }
            }}
          >
            <DeleteOutlineIcon
              className="SideBar_Logo"
              id="SideBar_Trash_Icon"
              style={{ fontSize: "30px" }}
            />
            <h3 className="SideBar_Lebal" id="SideBar_Trash_Lebal">
              Trash
            </h3>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default SideBar;

import React, { useState } from "react";
import "./StyleNavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import NoteIcon from "@material-ui/icons/Note";
import RefreshIcon from "@material-ui/icons/Refresh";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import UserImg from "../image/UserImg.png";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import UserAccount from "./UserAccount";

const NavBar = () => {
  const [listGrid, updateListGrid] = useState(true);
  const SwapListGrid = () => {
    if (listGrid === true) {
      updateListGrid(false);
    } else if (listGrid === false) {
      updateListGrid(true);
    }
  };
  const GridIcon = () => {
    return (
      <>
        <div
          className="NavBar_Icons_Outline"
          id="NavBar_ViewComfyIcon_Outline"
          onClick={SwapListGrid}
        >
          <ViewComfyIcon
            id="NavBar_ViewComfyIcon"
            className="NavBar_Icons"
            style={{ fontSize: "30px" }}
          />
        </div>
      </>
    );
  };
  const ListIcon = () => {
    return (
      <>
        <div
          className="NavBar_Icons_Outline"
          id="NavBar_ViewListIcon_Outline"
          onClick={SwapListGrid}
        >
          <ViewListIcon
            id="NavBar_ViewListIcon"
            className="NavBar_Icons"
            style={{ fontSize: "30px" }}
          />
        </div>
      </>
    );
  };
  const [clickSearch, updateClickSearch] = useState([
    {
      backgroundColor: "",
    },
    {
      backgroundColor: "",
    },
  ]);
  const searchClicked = () => {
    updateClickSearch([
      {
        backgroundColor: "white",
        boxShadow: "0px 0px 5px rgb(165, 165, 165)",
      },
      {
        backgroundColor: "white",
      },
    ]);
    console.log("hello");
  };
  const [switchUserAccountState, updatSewitchUserAccountState] =
    useState(false);
  const switchUserAccount = () => {
    if (switchUserAccountState == false) {
      updatSewitchUserAccountState(true);
    } else {
      updatSewitchUserAccountState(false);
    }
  };
  return (
    <>
      <div id="NavBar_Container">
        <div id="NavBar_LeftItem">
          <div className="NavBar_Icons_Outline">
            <MenuIcon
              className="NavBar_MenuIcon"
              style={{ fontSize: "30px" }}
            />
          </div>
          <NoteIcon
            className="NavBar_LogoIcon"
            id="NavBar_NoteIcon"
            style={{ fontSize: "40px" }}
          />
          <h1 id="NavBar_Title_Text">Keep</h1>
        </div>
        <form>
          <div
            className="NavBar_boxShadow"
            id="NavBar_SearchNote_Outline"
            onClick={searchClicked}
            style={clickSearch[0]}
          >
            <div className="NavBar_Icons_Outline">
              <SearchIcon
                style={{
                  fontSize: "25px",
                  margin: "0px 20px 0px 20px",
                }}
              />
            </div>
            <input
              id="NavBar_SearchNote"
              type="text"
              placeholder="Search"
              style={clickSearch[1]}
            />
            <div className="NavBar_Icons_Outline">
              <CloseIcon
                style={{ fontSize: "25px", margin: "0px 20px 0px 20px" }}
              />
            </div>
          </div>
        </form>
        <div id="NavBar_rightItem">
          <div className="NavBar_Icons_Outline" id="NavBar_RefreshIcon_Outline">
            <RefreshIcon
              id="NavBar_RefreshIcon"
              className="NavBar_Icons"
              style={{ fontSize: "30px" }}
            />
          </div>
          {listGrid ? <ListIcon /> : <GridIcon />}
          <div
            className="NavBar_Icons_Outline"
            id="NavBar_SettingsIcon_Outline"
          >
            <SettingsIcon
              id="NavBar_SettingsIcon"
              className="NavBar_Icons"
              style={{ fontSize: "30px" }}
            />
          </div>

          <div className="NavBar_Icons_Outline" id="NavBar_AppsIcon_Outline">
            <AppsIcon
              id="NavBar_AppsIcon"
              className="NavBar_Icons"
              style={{ fontSize: "30px" }}
            />
          </div>
          <img
            id="NavBar_UserImg"
            src={UserImg}
            alt="UserImg"
            onClick={switchUserAccount}
          />
          {switchUserAccountState ? <UserAccount /> : null}
        </div>
      </div>
    </>
  );
};

export default NavBar;

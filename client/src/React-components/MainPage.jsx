import React from "react";
import SideBar from "./SidBar";
import { Route, Switch } from "react-router";
import NotesPage from "./NotesPage";
import ReminderPage from "./ReminderPage";
import EditLabelsPage from "./EditLabelsPage";
import ArchivePage from "./ArchivePage";
import TrashPage from "./TrashPage";
import LogOutPage from "./LogOutPage";

const RoutingMainPage = () => {
  return (
    <>
      <Switch>
        <Route path="/u/notes" component={NotesPage} />
        <Route path="/u/reminders" component={ReminderPage} />
        <Route path="/u/editlabels" component={EditLabelsPage} />
        <Route path="/u/archive" component={ArchivePage} />
        <Route path="/u/trash" component={TrashPage} />
        <Route path="/u/logout" component={LogOutPage} />
      </Switch>
    </>
  );
};

const MainPage = () => {
  return (
    <>
      <SideBar />
      <RoutingMainPage />
    </>
  );
};

export default MainPage;

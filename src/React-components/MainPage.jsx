import React from "react";
import SideBar from "./SidBar";
import { Route, Switch } from "react-router";
import NotesPage from "./NotesPage";
import ReminderPage from "./ReminderPage";
import EditLabelsPage from "./EditLabelsPage";
import ArchivePage from "./ArchivePage";
import TrashPage from "./TrashPage";

const MainPage = () => {
  return (
    <>
      <SideBar />
      <Switch>
        <Route path="/notes" component={NotesPage} />
        <Route path="/reminders" component={ReminderPage} />
        <Route path="/editlabels" component={EditLabelsPage} />
        <Route path="/archive" component={ArchivePage} />
        <Route path="/trash" component={TrashPage} />
      </Switch>
    </>
  );
};

export default MainPage;

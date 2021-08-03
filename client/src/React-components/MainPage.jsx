import React, { useEffect } from "react";
import SideBar from "./SidBar";
import { Route, Switch, useHistory } from "react-router";
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
  const history = useHistory();
  const callMainPage = async () => {
    try {
      const res = await fetch("/u", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Contact-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      // now in this data we got the all data from the data base so, now we will going to use for the about page
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      console.log("error");
      history.push("/signin");
    }
  };
  useEffect(() => {
    callMainPage();
  }, []);
  return (
    <>
      <SideBar />
      <RoutingMainPage />
    </>
  );
};

export default MainPage;

import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  history.push("/u/notes");
  return <></>;
};

export default HomePage;

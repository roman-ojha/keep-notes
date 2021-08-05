import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  history.push("/signin");
  return <></>;
};

export default HomePage;

import React from "react";
import NavBar from "./React-components/NavBar";
import MainPage from "./React-components/MainPage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </>
  );
};

export default App;

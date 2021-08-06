import React, { useEffect } from "react";
import { useHistory } from "react-router";

const LogOutPage = () => {
  const history = useHistory();
  const userLogout = async () => {
    try {
      const res = await fetch("/u/logout", {
        method: "GET",
        header: {
          Accpet: "application/josn",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      history.push("/signin", { replace: true });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      console.log("Hello");
    } catch (err) {}
  };
  useEffect(() => {
    userLogout();
  });
  return <></>;
};

export default LogOutPage;

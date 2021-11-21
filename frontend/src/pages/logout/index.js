import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import SessionService from "../../services/SessionService";

function Logout() {
  const history = useHistory();
  useEffect(() => {
    SessionService.logout();
    history.push("/");
  }, []);
  return <Redirect to="login" />;
}

export default Logout;

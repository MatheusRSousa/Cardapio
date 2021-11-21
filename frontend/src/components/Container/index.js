import React from "react";
import { useHistory } from "react-router";
import SessionService from "../../services/SessionService";

import "./styles.css";

function Container({ children, backTo }) {
  const history = useHistory();

  const handleBackTo = () => {
    history.push(backTo);
  };

  return (
    <>
      <nav>
        {backTo && (
          <h3 className="back-button" onClick={handleBackTo}>
            ◀️ Voltar
          </h3>
        )}
      </nav>
      <div className="container" data-admin={SessionService.hasRole("ADMIN")}>
        {children}
      </div>
    </>
  );
}

export default Container;

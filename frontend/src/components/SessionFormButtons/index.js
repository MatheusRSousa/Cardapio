import { Button } from "@material-ui/core";
import React from "react";
import "./stylex.css";

function SessionFormButtons({ isEdit }) {
  return (
    <div className="button-container">
      <Button color="primary" variant="contained" type="submit">
        {isEdit ? "Cadastrar" : "Logar"}
      </Button>
    </div>
  );
}

export default SessionFormButtons;

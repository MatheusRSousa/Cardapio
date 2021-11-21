import { Button } from "@material-ui/core";
import React from "react";
import "./stylex.css";

function FormButtons({ secondary, isEdit }) {
  return (
    <div className="button-container">
      {isEdit && (
        <Button
          color="primary"
          variant="contained"
          type="button"
          onClick={() => secondary()}
        >
          Limpar
        </Button>
      )}
      <Button color="primary" variant="contained" type="submit">
        {isEdit ? "Salvar" : "Adicionar"}
      </Button>
    </div>
  );
}

export default FormButtons;

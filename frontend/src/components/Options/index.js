import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./styles.css";

function Options({ handleDelete, handleEdit }) {
  return (
    <div className="edit-container">
      <EditIcon fontSize="large" onClick={() => handleEdit()} />
      <DeleteIcon fontSize="large" onClick={() => handleDelete()} />
    </div>
  );
}

export default Options;

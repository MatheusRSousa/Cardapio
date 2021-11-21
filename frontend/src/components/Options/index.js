import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
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

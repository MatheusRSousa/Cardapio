import React from "react";
import { useHistory } from "react-router";

import "./styles.css";

function Item({ title, navigation, icon }) {
  const history = useHistory();

  const handlePress = (navigation) => {
    history.push(navigation);
  };

  return (
    <div className="item" onClick={() => handlePress(navigation)}>
      <img src={icon} alt={title} />
      <h1>{title}</h1>
    </div>
  );
}

export default Item;

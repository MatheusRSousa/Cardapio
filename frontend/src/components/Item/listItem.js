import React from "react";
import Item from ".";

function ListItens({ itens }) {
  return itens.map((item) => <Item key={item.title} {...item} />);
}

export default ListItens;

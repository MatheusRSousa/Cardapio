import React from "react";
import CategoryIcon from "../../assets/category-icon.png";
import ProductIcon from "../../assets/products-icon.png";
import ListItens from "../../components/Item/listItem";
import "./styles.css";

const itens = [
  {
    title: "Produtos",
    navigation: "/products",
    icon: ProductIcon,
  },
  {
    title: "Categorias",
    navigation: "/categories",
    icon: CategoryIcon,
  },
];

function Home() {
  return (
    <div className="home-container">
      <ListItens itens={itens} />
    </div>
  );
}

export default Home;

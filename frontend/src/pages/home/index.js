import React from "react";
import CategoryIcon from "../../assets/category-icon.png";
import ProductIcon from "../../assets/products-icon.png";
import LogoutIcon from "../../assets/logout.svg";
import ListItens from "../../components/Item/listItem";
import QRCode from "react-qr-code";
import "./styles.css";
import SessionService from "../../services/SessionService";

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
  {
    title: "Logout",
    navigation: "/logout",
    icon: LogoutIcon,
  },
];

function Home() {
  const getLink = () => {
    return "http:192.168.1.112:3000/login?token=" + SessionService.getToken();
  };
  return (
    <div className="fullscreen-container">
      <div className="qr-code">
        <h1>Utilizar no celular</h1>
        <div>
          <QRCode
            value={getLink()}
            size={300}
            fgColor="#0f121b"
            bgColor="white"
          />
        </div>
      </div>
      <ListItens itens={itens} />
    </div>
  );
}

export default Home;

import React from "react";
import { HeaderContainer, HeaderContent } from "./styles";
import { TbMenu2 } from "react-icons/tb"; //importa o menu icon da biblioteca de ícones do react
import LogoLua from "./../Assets/logoNome.png";

const Header = ({ handleToggleSidebar, issidebaropen }) => {
  return (
    <HeaderContainer issidebaropen={issidebaropen ? "true" : "false"}>
      <HeaderContent>
        <div style={{ fontSize: "30px", cursor: "pointer" }}>
          <TbMenu2 onClick={handleToggleSidebar} />
        </div>
      </HeaderContent>
      <div style={{ width: "100%", textAlign: "center" }}>
        <img
          src={LogoLua}
          alt="Seu Logo"
          style={{ width: "100px", height: "auto" }} // Ajuste conforme necessário
        />{" "}
      </div>
    </HeaderContainer>
  );
};

export default Header;

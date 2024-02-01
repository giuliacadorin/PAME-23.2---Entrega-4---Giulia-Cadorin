import React from "react";
import { HeaderContainer, HeaderContent, HeaderDiv } from "./styles";
import { TbMenu2 } from "react-icons/tb"; //importa o menu icon da biblioteca de ícones do react

const Header = ({ handleToggleSidebar, isSidebarOpen }) => {
  return (
    <HeaderContainer isSidebarOpen={isSidebarOpen}>
      <HeaderContent>
        <div style={{ fontSize: "30px" }}>
          <TbMenu2 onClick={handleToggleSidebar} />
        </div>
        <div>
          <HeaderDiv>Lua Negra</HeaderDiv>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

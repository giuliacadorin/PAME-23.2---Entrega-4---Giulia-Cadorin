// Header.js
import React from "react";
import { HeaderContainer, HeaderContent, HeaderDiv } from "./styles";
// import { FaBars } from "react-icons/fa";

const Header = ({ handleToggleSidebar, isSidebarOpen }) => {
  return (
    <HeaderContainer isSidebarOpen={isSidebarOpen}>
      <HeaderContent>
        <div>
          {/* <FaBars onClick={handleToggleSidebar} /> */}
        </div>
        <div>
          <HeaderDiv>Lua Negra</HeaderDiv>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

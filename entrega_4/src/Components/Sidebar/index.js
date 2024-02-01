import React from "react";
import { SidebarContainer, SidebarText } from "./styles";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SidebarText>
        <a href="/estoque">Estoque</a>
      </SidebarText>
      <SidebarText>
        <a href="/encomendas">Encomendas</a>
      </SidebarText>
      <SidebarText>
        <a href="/">Sair</a>
      </SidebarText>
    </SidebarContainer>
  );
};

export default Sidebar;

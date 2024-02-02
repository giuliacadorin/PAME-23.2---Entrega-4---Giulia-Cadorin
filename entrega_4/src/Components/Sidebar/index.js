import React from "react";
import { SidebarContainer, SidebarText } from "./styles";

const Sidebar = ({ issidebaropen }) => {
  return (
    <SidebarContainer issidebaropen={issidebaropen ? "true" : "false"}>
      <SidebarText>
        <a href="/home">Página inicial</a>
      </SidebarText>
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

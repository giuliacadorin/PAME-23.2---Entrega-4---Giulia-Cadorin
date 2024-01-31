import React from "react";
import { SidebarContainer, SidebarText } from "./styles";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SidebarText>
        <a href="/">Registrar entradas de produtos no estoque</a>
      </SidebarText>
      <SidebarText>
        <a href="/">Registrar saídas de produtos do estoque</a>
      </SidebarText>
      <SidebarText>
        <a href="/">Registrar pedidos de encomendas</a>
      </SidebarText>
      <SidebarText>
        <a href="/">Acompanhar status das entregas</a>
      </SidebarText>
      <SidebarText>
        <a href="/">Registrar pedidos entregues</a>
      </SidebarText>

      <SidebarText>
        <a href="/">Sair</a>
      </SidebarText>
    </SidebarContainer>
  );
};

export default Sidebar;

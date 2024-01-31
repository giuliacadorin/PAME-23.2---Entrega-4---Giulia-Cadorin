import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, SidebarIcon } from "./styles";
import { TbMenu2 } from "react-icons/tb";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <Link to="/dashboard">
        <SidebarIcon as={TbMenu2} onClick={handleToggleSidebar} />
      </Link>
      {/* Adicione mais links ou itens da barra lateral conforme necessário */}
    </SidebarContainer>
  );
};

export default Sidebar;

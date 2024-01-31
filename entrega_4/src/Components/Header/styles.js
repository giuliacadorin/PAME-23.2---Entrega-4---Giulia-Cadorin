import styled from "styled-components";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #4a707f;
  color: #fff;
  text-align: center;
  font-size: 26px;
  padding: 22px 0px;
`;

// Modificações no Header por causa do Sidebar
export const HeaderContainer = styled.div`
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "200px" : "0")};
  transition: left 0.3s ease;
  z-index: 2; // Certifique-se de que o Header esteja sobreposto ao Sidebar
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  margin-left: 20px;
  color: #fff;
`;

export const SidebarContainer = styled.div`
  background-color: #333;
  color: #fff;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 60px; /* Ajustado para começar abaixo do Header */
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-200px")};
  transition: left 0.3s ease;
  z-index: 1; // Certifique-se de que o Sidebar esteja atrás do Header
`;

export const SidebarIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
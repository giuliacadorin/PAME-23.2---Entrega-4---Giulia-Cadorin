// Sidebar styles.js
import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #333;
  color: #fff;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease; /* Adiciona uma transição para o tamanho */
  position: fixed;
  top: 80px; /* Heigth do header */
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-200px")};
  z-index: 1;
`;

export const SidebarIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

export const SidebarText = styled.p`
  font-size: 16px;
  margin: 10px;

  a {
    padding: 10px 0px;
    color: #fff;
    text-decoration: none;
  }
`;

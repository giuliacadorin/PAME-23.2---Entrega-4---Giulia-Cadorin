// Sidebar styles.js
import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #333;
  color: #fff;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: top;
  transition: left 0.3s ease; /* Adiciona uma transição para o tamanho */
  position: fixed;
  top: 80px; /* Heigth do header */
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-200px")};
  z-index: 1;
  padding-top: 25px;
`;

// export const SidebarIcon = styled.div`
//   font-size: 24px;
//   margin-bottom: 8px;
//   color: #fff;
//   text-decoration: none;
//   cursor: pointer;
// `;

export const SidebarText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
  display: flex;

  a {
    padding: 6px 16px;
    color: #fff;
    text-decoration: none;
  }
`;

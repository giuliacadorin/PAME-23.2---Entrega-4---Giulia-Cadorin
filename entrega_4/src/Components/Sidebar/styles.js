// Sidebar styles.js
import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #333;
  color: #fff;
  width: ${({ isOpen }) => (isOpen ? "200px" : "60px")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease; /* Adiciona uma transição para o tamanho */
`;

export const SidebarIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

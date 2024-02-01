//header styles.js
import styled from "styled-components";
// import { TbMenu2 } from "react-icons/tb";

// const iconSize = 70;

// export const SidebarIcon = styled(TbMenu2)`
//   // display: inline;
//   font-size: 50px; // Use a variável de tamanho aqui
//   margin-bottom: 10px;
//   color: #fff;
//   text-decoration: none;
//   cursor: pointer;
// `;

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #4a707f;
  color: #fff;
  text-align: center;
  font-size: 26px;
  padding: 22px 0px;
  z-index: 100;
`;

// Modificações no Header por causa do Sidebar
export const HeaderContainer = styled.div`
  background-color: #4a707f;
  color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  transition: left 0.3s ease;
  z-index: 2;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

//header styles.js
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

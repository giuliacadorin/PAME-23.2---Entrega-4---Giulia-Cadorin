import styled from "styled-components";

// Conteiner da Página
export const PageContainer = styled.div`
  background-color: #7ea5b4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ajusta a altura para ocupar toda a altura da viewport */
`;

// Conteiner centralizado
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4a707f;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  height: 400px;
`;
export const LoginTitle = styled.h2`
  color: #fff;
  margin-bottom: 50px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 12px;
  border: none;
`;

export const LoginButton = styled.button`
  width: 260px;
  height: 40px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 12px;
  margin-top: 20px;
`;

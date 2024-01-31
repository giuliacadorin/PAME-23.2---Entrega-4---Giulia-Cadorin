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
  width: 360px;
  height: 420px;
`;
export const LoginTitle = styled.h2`
  color: #fff;
  margin-bottom: auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 12px;
  border: none;
`;

export const InputWithIcon = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 42%;
    left: 10px;
    transform: translateY(-50%);
  }

  .lockIcon {
    position: absolute;
    top: 42%;
    left: 10px; 
    transform: translateY(-50%);
  }

  input {
    width: calc(100% - 150px);   
    padding-left: 40px; /* Espaço para o ícone */
    border: none
    border-radius: 12px;
    padding: 10px 100px 10px 52px;
  }
`;

export const LoginButton = styled.button`
  width: 320px;
  height: 40px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 12px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

// Estilização para o rodapé
export const Footer = styled.footer`
  background-color: #1f3842;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  display: flex;
  justify-content: center;

  div {
    width: 100%;
  }
`;

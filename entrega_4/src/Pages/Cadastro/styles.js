import styled from "styled-components";

export const CadastroContainer = styled.div`
  background-color: #7ea5b4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ajusta a altura para ocupar toda a altura da viewport */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #4a707f;
  padding: 20px;
  border-radius: 10px;
  width: 360px;
  height: 420px;
`;

export const CadastroTitle = styled.h2`
  margin-bottom: auto;
  color: #fff;
`;

export const Input = styled.input`
  width: 310px;
  height: 30px;
  padding: 8px;
  display: flex;
  margin-bottom: 15px;
  border-radius: 12px;
  border: none;
`;

export const InputWithIcon = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  .lockIcon {
    position: absolute;
    top: 50%;
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

export const CadastroButton = styled.button`
  width: 320px;
  height: 40px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 12px;
  margin-bottom: 80px;
  margin-top: 30px;
`;

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


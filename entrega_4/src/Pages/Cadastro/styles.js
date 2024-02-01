import styled from "styled-components";

// preto : #1B1B1B
// marrom: #692403
// roxo:    #650E83
// branco: #F4F7F8

export const CadastroContainer = styled.div`
  background: linear-gradient(to bottom, #1b1b1b 40%, #650e83);
  //background-color: #7ea5b4;
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
  background-color: #650e83;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 460px;
`;

export const CadastroTitle = styled.h2`
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
  background-color: #692403;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 12px;
  margin-top: 30px;
  padding: 12px;
`;

export const VoltarButton = styled.button`
  width: 320px;
  background-color: #692403;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 12px;
  margin-bottom: 40px;
  padding: 12px;
`;

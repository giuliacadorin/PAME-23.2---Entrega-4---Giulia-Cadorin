import styled from "styled-components";

// preto : #1B1B1B
// marrom: #692403
// roxo:   #650E83
// lilás: #AE17E0
// branco: #F4F7F8

// Conteiner da Página
export const PageContainer = styled.div`
  background: linear-gradient(to bottom, #692403, #650e83);
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
  background-color: #1b1b1b;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 460px;

  p {
    color: #fff;
  }
  label {
    color: #fff;
  }
  a {
    color: #fff;
  }
`;
export const LoginTitle = styled.h2`
  color: #F4F7F8;
  // margin-bottom: auto;
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
  vertical-align: text-bottom;
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
  background-color: #ae17e0; //#4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 12px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 16px;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
  user-select: none;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
  outline: none;

  &:checked {
    background-color: #1b236c;
    border-color: #00e3ff;
  }
`;

export const CheckboxLabel = styled.span`
  color: #fff;
`;


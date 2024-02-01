// styles.js

import styled from "styled-components";

export const ListaProdutos = styled.ul`
  list-style-type: none;
  margin: 0;
  // padding: 0;

  li {
    padding: 10px 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
  }
`;

export const TituloLista = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const BotoesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EncomendaEntregueBotao = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

export const ExcluirBotao = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

export const EncomendarBotao = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

export const AumentarBotao = styled.button`
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0px 25px;
`;

export const DiminuirBotao = styled.button`
  background-color: #e67e22;
  color: #fff;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0px 25px;
`;

export const FormularioEstoque = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

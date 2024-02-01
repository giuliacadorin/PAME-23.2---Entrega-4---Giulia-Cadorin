import styled from "styled-components";

export const EstoqueSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ListaProdutos = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #ddd; // Adiciona borda aos itens
    padding: 8px;
  }
`;

export const ExcluirBotao = styled.button`
  background-color: #d9534f;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #c9302c;
  }
`;

export const FormularioEstoque = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
    margin-bottom: 10px;
    width: calc(100% - 20px);
  }
  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #45a049;
    }
  }
`;

export const TituloLista = styled.h2`
  text-align: left;
  margin-bottom: 20px;
`;

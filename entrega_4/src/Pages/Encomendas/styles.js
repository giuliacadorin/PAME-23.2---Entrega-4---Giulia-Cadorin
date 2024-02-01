// styles.js

import styled from "styled-components";
import { LuPlus, LuMinus } from "react-icons/lu";

export const ListaProdutos = styled.ul`
  list-style-type: none;
  margin: 0;

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

export const TituloMain = styled.h1`
  font-size: 2rem;
`;

export const BotoesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EncomendaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EncomendaActions = styled.div`
  margin-top: 10px;
`;

export const EncomendaEntregaBotao = styled.button`
  background-color: #1ea922;
  color: #fff;
  border: none;
  padding: 15px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

export const EncomendaCancelaBotao = styled.button`
  background-color: #f00;
  color: #fff;
  border: none;
  padding: 15px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

export const EncomendaExcluirBotao = styled.button`
  background-color: #f00;
  color: #fff;
  border: none;
  padding: 15px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

export const EncomendarBotao = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 12px 12px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 6px;
  margin-left: 20px;
`;

export const AumentarBotao = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;

export const LuPlusIcon = styled(LuPlus)`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const DiminuirBotao = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;

export const LuMinusIcon = styled(LuMinus)`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const ContagemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const FormularioEstoque = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    padding: 20px 16px;
    border-radius: 10px;
    border: 1px solid #ddd;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 20px 16px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const ListaEncomendas = styled.ul`
  list-style-type: none;
  margin: 0;

  li {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
`;

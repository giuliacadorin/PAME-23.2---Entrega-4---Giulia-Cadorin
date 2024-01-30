import React from "react";
import { CadastroContainer, CadastroTitle } from "./styles";


function Cadastro() {
  return (
    <CadastroContainer>
      <CadastroTitle>Cadastro de Usuário</CadastroTitle>
      {/* Adicione os campos de cadastro aqui */}
      <form>
        {/* Exemplo de campo */}
        <label>Nome:</label>
        <input type="text" />

        {/* Adicione mais campos conforme necessário */}

        <button type="submit">Cadastrar</button>
      </form>
    </CadastroContainer>
  );
}

export default Cadastro;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o componente Link
import { VscAccount, VscLock } from "react-icons/vsc";


import {
  CadastroContainer,
  CadastroTitle,
  CadastroButton,
  Container,
  Input,
  Footer,
  InputWithIcon,
} from "./styles";


function Cadastro() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleCadastro = () => {
    // Lógica de cadastro (substitua por sua lógica real)
    // Salvando no localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redireciona para a página de login
    navigate("/login");
  };

  return (
    <CadastroContainer>
      <Container>
        <CadastroTitle>Faça seu cadastro!</CadastroTitle>

        <div>
          <InputWithIcon>
            <VscAccount className="icon" />
            <Input
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputWithIcon>
          <InputWithIcon>
            <VscLock className="lockIcon" />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWithIcon>
        </div>

        {/* Usa o componente Link para criar um link para a página de login */}
        <CadastroButton onClick={handleCadastro}>Cadastrar</CadastroButton>
      </Container>

      <Footer>
        <p> © 2024 Lua Negra Todos os direitos reservados.</p>
      </Footer>
    </CadastroContainer>
  );
}

export default Cadastro;

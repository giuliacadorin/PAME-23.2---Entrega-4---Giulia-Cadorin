import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscAccount, VscLock } from "react-icons/vsc";

import {
  CadastroContainer,
  CadastroTitle,
  CadastroButton,
  Container,
  Input,
  InputWithIcon,
  VoltarButton,
} from "./styles";

function Cadastro() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/login");
  };

  // Função para lidar com o cadastro
  const handleCadastro = () => {
    // Verifica se já há dados no localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica se o usuário já existe
    const userExists = existingUsers.some((user) => user.username === username);

    if (userExists) {
      alert("Usuário já existe. Escolha outro nome de usuário.");
      return;
    }

    // Adiciona o novo usuário
    const newUser = { username, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Limpa os campos do formulário
    setUsername("");
    setPassword("");

    alert("Usuário " + username + " cadastrado com sucesso!");
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

        <CadastroButton onClick={handleCadastro}>Cadastrar</CadastroButton>
        <VoltarButton onClick={handleVoltar}>Iniciar sessão</VoltarButton>  {/* caso a pessoa clique errado ela tem a opção de voltar para login*/}
      </Container>
    </CadastroContainer>
  );
}

export default Cadastro;

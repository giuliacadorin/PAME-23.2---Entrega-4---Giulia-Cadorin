import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscAccount, VscLock } from "react-icons/vsc";
import LogoLua from "./../../Components/Assets/logoNome.png";

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
    if (username === "") {
      alert("Preencha usuário.");
      return;
    }
    if (password === "") {
      alert("Preencha a senha.");
      return;
    }

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
        <div style={{ width: "100%", textAlign: "center" }}>
          <img
            src={LogoLua}
            alt="Seu Logo"
            style={{ width: "100px", height: "auto" }} // Ajuste conforme necessário
          />{" "}
        </div>
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
        <VoltarButton onClick={handleVoltar}>Iniciar sessão</VoltarButton>{" "}
        {/* caso a pessoa clique errado ela tem a opção de voltar para login*/}
      </Container>
    </CadastroContainer>
  );
}

export default Cadastro;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [rememberUser, setRememberUser] = useState(false);

  const navigate = useNavigate();

  // Função para lidar com o cadastro
  const handleCadastro = () => {
    // Lógica de cadastro
    console.log("Usuário cadastrado com sucesso!");

    // Salva as informações do usuário no localStorage se a opção "Lembrar usuário" estiver marcada
    if (rememberUser) {
      localStorage.setItem(
        "rememberedUser",
        JSON.stringify({ username, password })
      );
    }

    // Redireciona para a página de login
    navigate("/login");
  };

  // Função para carregar as informações do usuário salvas no localStorage (se existirem)
  const loadRememberedUser = () => {
    const rememberedUser = localStorage.getItem("rememberedUser");

    if (rememberedUser) {
      const { username, password } = JSON.parse(rememberedUser);
      setUsername(username);
      setPassword(password);
      setRememberUser(true);
    }
  };

  // Carrega as informações do usuário ao montar o componente
  useEffect(() => {
    loadRememberedUser();
  }, []);

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

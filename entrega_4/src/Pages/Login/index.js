import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscAccount, VscLock } from "react-icons/vsc";

import {
  Footer,
  PageContainer,
  Container,
  LoginTitle,
  Input,
  LoginButton,
  InputWithIcon,
} from "./styles";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de autenticação 
    if (username === "usuario" && password === "senha") {
      console.log("Usuário logado com sucesso!");
      // Redireciona para a página "home"
      navigate("/home");
    } else {
      console.log("Usuário não cadastrado.");
    }
  };

  return (
    <PageContainer>
      <Container>
        <LoginTitle>Faça seu login!</LoginTitle>

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
        <LoginButton onClick={handleLogin}>Login</LoginButton>

        <p>
          Ainda não é cadastrado? <a href="/cadastro">Cadastre-se</a>
        </p>
      </Container>
      <Footer>
        <div>
          <p> © 2024 Lua Negra Todos os direitos reservados.</p>
        </div>
      </Footer>
    </PageContainer>
  );
}

export default Login;

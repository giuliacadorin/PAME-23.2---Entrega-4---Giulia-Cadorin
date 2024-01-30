import React from "react";
// import { Link } from "react-router-dom";

import {
  PageContainer,
  Container,
  LoginTitle,
  Input,
  LoginButton,
} from "./styles";

function Login() {
  return (
    <PageContainer>
      <Container>
        <LoginTitle>Faça seu login!</LoginTitle>
        <Input type="text" placeholder="Nome de Usuário" />
        <Input type="password" placeholder="Senha" />
        <LoginButton>Login</LoginButton>
        <p>
          Ainda não é cadastrado? <a href="/cadastro">Cadastre-se</a>
        </p>
      </Container>
    </PageContainer>
  );
}
export default Login;

import React from "react";
import { Footer } from "./styles";
// import { NavLink } from "react-router-dom";

import {
  PageContainer,
  Container,
  LoginTitle,
  Input,
  LoginButton,
} from "./styles";

import { InputWithImage } from "./styles"; // coloca imagem dentro das caixas de input do login


function Login() {  
  return (
    <PageContainer>
      <Container>
        <LoginTitle>Faça seu login!</LoginTitle>

        <InputWithImage>
          <input type="text" placeholder="Digite aqui" />
          <img
            className="input-image"
            src="caminho-da-sua-imagem.jpg"
            alt="Ícone"
          />
        </InputWithImage>

        <Input type="text" placeholder="Nome de Usuário" />

        <Input type="password" placeholder="Senha" />

        <LoginButton>Login</LoginButton>

        <p>
          Ainda não é cadastrado? <a href="/cadastro">Cadastre-se</a>
        </p>        
      </Container>

      <Footer>
        <p> © 2024 Lua Negra Todos os direitos reservados.</p>
      </Footer>
      
    </PageContainer>
  );
}
export default Login;

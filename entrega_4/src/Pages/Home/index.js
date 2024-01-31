// src/Pages/Home/index.js
import React from "react";
import { PageContainer, Container, HomeTitle } from "./styles";

function Home() {
  return (
    <PageContainer>
      <Container>
        <HomeTitle>Bem-vindo à Página Home!</HomeTitle>
        {/* Conteúdo da página Home */}
      </Container>
    </PageContainer>
  );
}

export default Home;

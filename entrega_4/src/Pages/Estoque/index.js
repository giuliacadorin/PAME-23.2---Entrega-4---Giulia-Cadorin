// Estoque.js

import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";


import {
  ExcluirBotao,
  AumentarBotao,
  DiminuirBotao,
  ListaProdutos,
  TituloLista,
  BotoesContainer,
  FormularioEstoque,
  ContagemContainer,
  LuMinusIcon,
  LuPlusIcon,
} from "./styles";

const Estoque = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState("");

  // Efeito para carregar produtos do localStorage quando a página carregar
  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);
  }, []);

  // Função para adicionar um novo produto ao array e ao localStorage
  const adicionarNovoProduto = () => {
    const produtoExistente = produtos.find(
      (produto) => produto.nome === novoProduto
    );

    if (produtoExistente) {
      // Se o produto já existe, incrementa a contagem
      const produtosAtualizados = produtos.map((produto) =>
        produto.nome === novoProduto
          ? { ...produto, contagem: produto.contagem + 1 }
          : produto
      );

      setProdutos(produtosAtualizados);
      localStorage.setItem("produtos", JSON.stringify(produtosAtualizados));
    } else {
      // Se o produto não existe, adiciona ao array
      const novoProdutoObj = { id: Date.now(), nome: novoProduto, contagem: 1 };
      const novosProdutos = [...produtos, novoProdutoObj];
      setProdutos(novosProdutos);
      localStorage.setItem("produtos", JSON.stringify(novosProdutos));
    }

    setNovoProduto("");
  };

  // Função para diminuir a contagem de um produto
  const diminuirContagem = (produtoId) => {
    const produtosAtualizados = produtos.map((produto) => {
      if (produto.id === produtoId) {
        // Reduz a contagem do produto em 1, mas mantém no mínimo 0
        produto.contagem = Math.max(0, produto.contagem - 1);
      }
      return produto;
    });

    setProdutos(produtosAtualizados);
    localStorage.setItem("produtos", JSON.stringify(produtosAtualizados));
  };

  // Função para aumentar a contagem de um produto
  const aumentarContagem = (produtoId) => {
    const produtosAtualizados = produtos.map((produto) => {
      if (produto.id === produtoId) {
        // Aumenta a contagem do produto em 1
        produto.contagem += 1;
      }
      return produto;
    });

    setProdutos(produtosAtualizados);
    localStorage.setItem("produtos", JSON.stringify(produtosAtualizados));
  };

  // Função para excluir um produto do array e do localStorage
  const excluirProduto = (produtoId) => {
    const produtosAtualizados = produtos.filter(
      (produto) => produto.id !== produtoId
    );

    setProdutos(produtosAtualizados);
    localStorage.setItem("produtos", JSON.stringify(produtosAtualizados));
  };

  // Renderização da lista de produtos
  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Header
        handleToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <main style={{ display: "flex", margin: "100px 0px 0px 0px" }}>
        <div style={{ flex: 1, padding: "20px" }}>
          <TituloLista>Produtos em Estoque</TituloLista>
          {produtos.length === 0 ? (
            <p>Estoque vazio.</p>
          ) : (
            <ListaProdutos>
              {produtos.map((produto) => (
                <li key={produto.id}>
                  <BotoesContainer>
                    {produto.nome}
                    <ContagemContainer>
                      <DiminuirBotao
                        onClick={() => diminuirContagem(produto.id)}
                      >
                        <LuMinusIcon />
                      </DiminuirBotao>
                      {produto.contagem}
                      <AumentarBotao
                        onClick={() => aumentarContagem(produto.id)}
                      >
                        <LuPlusIcon />
                      </AumentarBotao>
                    </ContagemContainer>
                    <ExcluirBotao onClick={() => excluirProduto(produto.id)}>
                      Excluir
                    </ExcluirBotao>
                  </BotoesContainer>
                </li>
              ))}
            </ListaProdutos>
          )}
        </div>

        <div style={{ flex: 1, padding: "20px" }}>
          <TituloLista>Adicionar Produtos</TituloLista>
          <FormularioEstoque
            onSubmit={(e) => {
              e.preventDefault();
              adicionarNovoProduto();
            }}
          >
            <input
              type="text"
              placeholder="Novo Produto"
              value={novoProduto}
              onChange={(e) => setNovoProduto(e.target.value)}
            />
            <button type="submit">Adicionar Produto</button>
          </FormularioEstoque>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Estoque;

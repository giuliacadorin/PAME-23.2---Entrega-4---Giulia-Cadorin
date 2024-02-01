import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import {
  ExcluirBotao,
  ListaProdutos,
  FormularioEstoque,
  TituloLista,
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
    if (novoProduto.trim() !== "") {
      const novoProdutoObj = { id: Date.now(), nome: novoProduto };
      const novosProdutos = [...produtos, novoProdutoObj];
      setProdutos(novosProdutos);
      localStorage.setItem("produtos", JSON.stringify(novosProdutos));
      setNovoProduto("");
    }
  };

  // Função para excluir um produto do array e do localStorage
  const excluirProduto = (produtoId) => {
    const produtosAtualizados = produtos.filter(
      (produto) => produto.id !== produtoId
    );
    setProdutos(produtosAtualizados);
    localStorage.setItem("produtos", JSON.stringify(produtosAtualizados));
  };

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
                  {produto.nome}
                  <ExcluirBotao onClick={() => excluirProduto(produto.id)}>
                    Excluir
                  </ExcluirBotao>
                </li>
              ))}
            </ListaProdutos>
          )}
        </div>

        <div style={{ flex: 1, padding: "20px" }}>
          <TituloLista>Incluir Produtos</TituloLista>
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

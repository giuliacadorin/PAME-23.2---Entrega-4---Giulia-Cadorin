// Estoque.js

import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";


import {
  EncomendaEntregueBotao,
  EncomendarBotao,
  ExcluirBotao,
  AumentarBotao,
  DiminuirBotao,
  ListaProdutos,
  TituloLista,
  BotoesContainer,
  FormularioEstoque,
} from "./styles";

const Encomendas = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState("");

  const [encomendas, setEncomendas] = useState([]);
  const [novaEncomenda, setNovaEncomenda] = useState("");

  const adicionarNovaEncomenda = () => {
    if (novaEncomenda.trim() !== "") {
      const encomendaExistente = encomendas.find(
        (encomenda) => encomenda.nome === novaEncomenda
      );

      if (encomendaExistente) {
        const encomendasAtualizadas = encomendas.map((encomenda) =>
          encomenda.nome === novaEncomenda
            ? { ...encomenda, contagem: encomenda.contagem + 1 }
            : encomenda
        );

        setEncomendas(encomendasAtualizadas);
        localStorage.setItem(
          "encomendas",
          JSON.stringify(encomendasAtualizadas)
        );
      } else {
        const novaEncomendaObj = {
          id: Date.now(),
          nome: novaEncomenda,
          contagem: 1,
          status: "Pedido",
        };
        const novasEncomendas = [...encomendas, novaEncomendaObj];
        setEncomendas(novasEncomendas);
        localStorage.setItem("encomendas", JSON.stringify(novasEncomendas));
      }

      setNovaEncomenda("");
    }
  };

  const marcarEntregue = (encomendaId) => {
    const encomendasAtualizadas = encomendas.map((encomenda) => {
      if (encomenda.id === encomendaId && encomenda.status === "Pedido") {
        // Muda o status para "Entregue" apenas se estiver em "Pedido"
        encomenda.status = "Entregue";
      }
      return encomenda;
    });

    setEncomendas(encomendasAtualizadas);
    localStorage.setItem("encomendas", JSON.stringify(encomendasAtualizadas));
  };

  // Efeito para carregar produtos do localStorage quando a página carregar
  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);
  }, []);

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
          <TituloLista>Encomendas</TituloLista>
          {encomendas.length === 0 ? (
            <p>Nenhuma encomenda registrada.</p>
          ) : (
            <ListaProdutos>
              {encomendas.map((encomenda) => (
                <li key={encomenda.id}>
                  {`ID: ${encomenda.id}, Produto: ${encomenda.nome}, Quantidade: ${encomenda.contagem}, Status: ${encomenda.status}`}
                  {encomenda.status === "Pedido" && (
                    <EncomendaEntregueBotao
                      onClick={() => marcarEntregue(encomenda.id)}
                    >
                      Entregue
                    </EncomendaEntregueBotao>
                  )}
                </li>
              ))}
            </ListaProdutos>
          )}
        </div>
        <div style={{ flex: 1, padding: "20px" }}>
          <TituloLista>Produtos em Estoque</TituloLista>
          {produtos.length === 0 ? (
            <p>Estoque vazio.</p>
          ) : (
            <ListaProdutos>
              {produtos.map((produto) => (
                <li key={produto.id}>
                  <BotoesContainer>
                    {produto.nome}:
                    <DiminuirBotao onClick={() => diminuirContagem(produto.id)}>
                      - {/*<LuMinus/> */}
                    </DiminuirBotao>
                    {produto.contagem}
                    <AumentarBotao
                      onClick={() => aumentarContagem(produto.id)}
                    >
                      + {/* <LuPlus /> */}
                    </AumentarBotao>
                    <EncomendarBotao
                      onClick={() => adicionarNovaEncomenda(produto.id)}
                    >
                      Encomendar
                    </EncomendarBotao>
                  </BotoesContainer>
                </li>
              ))}
            </ListaProdutos>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Encomendas;

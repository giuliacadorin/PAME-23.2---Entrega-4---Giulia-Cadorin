// Estoque.js

import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { LuPlus, LuMinus } from "react-icons/lu";

import {
  TituloMain,
  TituloLista,
  EncomendaEntregaBotao,
  EncomendaCancelaBotao,
  EncomendaExcluirBotao,
  EncomendarBotao,
  AumentarBotao,
  DiminuirBotao,
  ListaProdutos,
  BotoesContainer,
  EncomendaInfo,
  EncomendaActions,
  ListaEncomendas,
  ContagemContainer,
} from "./styles";

const Encomendas = () => {
  const [issidebaropen, setissidebaropen] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [encomendas, setEncomendas] = useState([]);
  // const [novaEncomenda, setNovaEncomenda] = useState("");
  // const [novoProduto, setNovoProduto] = useState("");

  const handleToggleSidebar = () => {
    setissidebaropen(!issidebaropen);
  };

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);

    const encomendasSalvas =
      JSON.parse(localStorage.getItem("encomendas")) || [];
    setEncomendas(encomendasSalvas);
  }, []);

  const adicionarNovaEncomenda = (produto) => {
    if (produto.nome) {
      const inputElement = document.getElementById(
        `qtd_encomenda_${produto.id}`
      );

      const novaEncomendaObj = {
        id: Date.now(),
        datahora: new Date().toLocaleString("pt-BR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        nome: produto.nome, //novaEncomenda,
        contagem: inputElement.value,
        status: "Pedido",
      };
      const novasEncomendas = [...encomendas, novaEncomendaObj];
      setEncomendas(novasEncomendas);
      localStorage.setItem("encomendas", JSON.stringify(novasEncomendas));
    }
  };
  const excluirEncomenda = (encomendaId) => {
    const encomendasAtualizadas = encomendas.map((encomenda) => {
      if (encomenda.id === encomendaId) {
        // Muda o status para "Entregue" apenas se estiver em "Pedido"
        encomenda.status = "Excluída";
      }
      return encomenda;
    });

    setEncomendas(encomendasAtualizadas);
    localStorage.setItem("encomendas", JSON.stringify(encomendasAtualizadas));
  };

  const cancelarEncomenda = (encomendaId) => {
    const encomendasAtualizadas = encomendas.map((encomenda) => {
      if (encomenda.id === encomendaId && encomenda.status === "Pedido") {
        // Muda o status para "Entregue" apenas se estiver em "Pedido"
        encomenda.status = "Cancelada";
      }
      return encomenda;
    });

    setEncomendas(encomendasAtualizadas);
    localStorage.setItem("encomendas", JSON.stringify(encomendasAtualizadas));
  };

  const entregarEncomenda = (encomendaId) => {
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

  //Efeito para carregar produtos do localStorage quando a página carregar
  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);
  }, []);

  const diminuirContagem = (produtoId) => {
    const inputElement = document.getElementById(`qtd_encomenda_${produtoId}`);
    if (inputElement) {
      const valorAtual = parseInt(inputElement.value, 10);
      const novoValor = Math.max(1, valorAtual - 1);
      inputElement.value = novoValor;
    }
  };

  const aumentarContagem = (produtoId) => {
    const inputElement = document.getElementById(`qtd_encomenda_${produtoId}`);
    if (inputElement) {
      const valorAtual = parseInt(inputElement.value, 10);
      const novoValor = valorAtual + 1;
      inputElement.value = novoValor;
    }
  };

  // Renderização da lista de produtos
  return (
    <div>
      <Sidebar issidebaropen={issidebaropen} />

      <Header
        handleToggleSidebar={handleToggleSidebar}
        issidebaropen={issidebaropen}
      />
      <div
        style={{
          height: "90px",
          padding: "100px 0px 0px 0px",
          Width: "100%",
          textAlign: "center",
        }}
      >
        <TituloMain>Encomendas</TituloMain>
      </div>
      <main style={{ display: "flex", margin: "0px 0px 100px 0px" }}>
        <div style={{ flex: 1, padding: "20px", maxWidth: "50%" }}>
          <TituloLista>Lista de Encomendas</TituloLista>
          {encomendas.length === 0 ? (
            <p>Nenhuma encomenda registrada.</p>
          ) : (
            <ListaEncomendas>
              {encomendas
                .sort((a, b) => {
                  // Define a ordem de prioridade dos status
                  const statusOrder = {
                    Pedido: 1,
                    Entregue: 2,
                    Cancelada: 3,
                    Excluida: 4,
                  };

                  // Obtém o índice do status de cada encomenda
                  const indexA =
                    statusOrder[a.status] || Number.MAX_SAFE_INTEGER;
                  const indexB =
                    statusOrder[b.status] || Number.MAX_SAFE_INTEGER;

                  // Compara os índices para determinar a ordem
                  return indexA - indexB;
                })
                .map((encomenda) => (
                  <li key={encomenda.id}>
                    <EncomendaInfo>
                      <div>
                        <strong>{encomenda.datahora}h</strong>
                        <br />
                        <strong>ID:</strong> {encomenda.id}
                        <br />
                        <strong>Produto:</strong> {encomenda.nome}
                        <br />
                        <strong>Quantidade:</strong> {encomenda.contagem}
                        <br />
                        <strong>Status:</strong> {encomenda.status}
                      </div>
                      <EncomendaActions>
                        {encomenda.status === "Pedido" && (
                          <EncomendaEntregaBotao
                            onClick={() => entregarEncomenda(encomenda.id)}
                          >
                            Entregue
                          </EncomendaEntregaBotao>
                        )}

                        {encomenda.status === "Pedido" && (
                          <EncomendaCancelaBotao
                            onClick={() => cancelarEncomenda(encomenda.id)}
                          >
                            Cancelar
                          </EncomendaCancelaBotao>
                        )}

                        {encomenda.status === "Entregue" && (
                          <EncomendaExcluirBotao
                            onClick={() => excluirEncomenda(encomenda.id)}
                          >
                            Excluir
                          </EncomendaExcluirBotao>
                        )}
                      </EncomendaActions>
                    </EncomendaInfo>
                  </li>
                ))}
            </ListaEncomendas>
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
                    <ContagemContainer>
                      <DiminuirBotao
                        onClick={() => diminuirContagem(produto.id)}
                      >
                        <LuMinus />
                      </DiminuirBotao>
                      <input
                        type="text"
                        id={`qtd_encomenda_${produto.id}`}
                        value={1}
                        readOnly
                        style={{
                          border: "none",
                          width: `${(1).toString().length * 8 + 8}px`,
                        }}
                      />
                      <AumentarBotao
                        onClick={() => aumentarContagem(produto.id)}
                      >
                        <LuPlus />
                      </AumentarBotao>
                    </ContagemContainer>
                    <EncomendarBotao
                      onClick={() => {
                        adicionarNovaEncomenda(produto);
                      }}
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

import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";

import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import {
  TituloLista,
  ListaProdutos,
  BotoesContainer,
  ContagemContainer,
} from "./../Estoque/styles";

import { ListaEncomendas, EncomendaInfo } from "./../Encomendas/styles";

const Home = () => {
  const [issidebaropen, setissidebaropen] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [encomendas, setEncomendas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const handleToggleSidebar = () => {
    setissidebaropen(!issidebaropen);
  };

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);

    const encomendasSalvas =
      JSON.parse(localStorage.getItem("encomendas")) || [];
    setEncomendas(encomendasSalvas);

    const usuariosSalvos = JSON.parse(localStorage.getItem("users")) || [];
    setUsuarios(usuariosSalvos);
  }, []);

  // Convert products data to Chart.js format
  // const chartData = {
  //   labels: produtos.map((produto) => produto.nome),
  //   datasets: [
  //     {
  //       label: "Contagem de Produtos",
  //       backgroundColor: "rgba(75,192,192,0.2)",
  //       borderColor: "rgba(75,192,192,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(75,192,192,0.4)",
  //       hoverBorderColor: "rgba(75,192,192,1)",
  //       data: produtos.map((produto) => produto.contagem),
  //     },
  //   ],
  // };

  return (
    <div>
      <Sidebar issidebaropen={issidebaropen} />

      <Header
        handleToggleSidebar={handleToggleSidebar}
        issidebaropen={issidebaropen}
      />
      <main style={{ display: "flex", margin: "0px 0px 100px 0px" }}>
        <div style={{ flex: 1, padding: "20px", margin: "80px 0px 0px 0px" }}>
          <TituloLista>Produtos em Estoque</TituloLista>
          {produtos.length === 0 ? (
            <p>Estoque vazio.</p>
          ) : (
            <ListaProdutos>
              {produtos.map((produto) => (
                <li key={produto.id}>
                  <BotoesContainer>
                    {produto.nome}
                    <ContagemContainer>{produto.contagem}</ContagemContainer>
                  </BotoesContainer>
                </li>
              ))}
            </ListaProdutos>
          )}
        </div>

        <div style={{ flex: 1, padding: "20px", margin: "80px 0px 0px 0px" }}>
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
                    </EncomendaInfo>
                  </li>
                ))}
            </ListaEncomendas>
          )}
        </div>

        <div style={{ flex: 1, padding: "20px", margin: "80px 0px 0px 0px" }}>
          <TituloLista>Lista de Usuários</TituloLista>
          <ListaProdutos>
            {usuarios.map((usuario) => (
              <li key={usuario.username}>
                <BotoesContainer>{usuario.username}</BotoesContainer>
              </li>
            ))}
          </ListaProdutos>
        </div>
      </main>

      {/* <div>
        <Bar
          data={chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: { beginAtZero: true },
            },
          }}
        />
      </div> */}

      <Footer />
    </div>
  );
};

export default Home;

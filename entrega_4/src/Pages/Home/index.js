import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);
  }, []);

  // Convert products data to Google Charts format
  const chartData = [
    ["Produto", "Quantidade"],
    ...produtos.map((product) => [product.nome, product.contagem]),
  ];

  // Bar chart options
  const barChartOptions = {
    title: "Produtos",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Quantidade",
      minValue: 0,
    },
    vAxis: {
      title: "Produto",
    },
  };

  // Doughnut chart options
  const doughnutChartOptions = {
    title: "Products Distribution",
  };

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Header
        handleToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div>
        {/* <Chart
          width={"500px"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={barChartOptions}
        /> */}
        {/* <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={doughnutChartOptions}
        /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

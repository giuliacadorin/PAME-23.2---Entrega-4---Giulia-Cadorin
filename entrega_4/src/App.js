import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header />
        <div className="app">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Home />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

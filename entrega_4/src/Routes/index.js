import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro/index.js";

function Rotas () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/Cadastro" element={<Cadastro></Cadastro>} />
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default Rotas;

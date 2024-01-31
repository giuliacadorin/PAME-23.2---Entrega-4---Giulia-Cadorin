import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/cadastro" element={<Cadastro></Cadastro>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default Rotas;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; //Routes
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro/index.js";

const Rotas = () => {
  return (
    <Router>
      {/* <Routes> */}
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" exact component={Cadastro} />
      {/* </Routes> */}
    </Router>
  );
};

export default Rotas;

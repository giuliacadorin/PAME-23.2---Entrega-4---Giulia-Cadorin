import React from "react";
// import Rotas from "./Routes";
import { GlobalStyle } from "./styles";
import Header from "./Components/Header";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Login />
      {/* <Rotas /> */}
    </div>
  );
}

export default App;

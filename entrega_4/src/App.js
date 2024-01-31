import React from "react";
import { GlobalStyle } from "./styles";
import Header from "./Components/Header";
import Rotas from "./Routes";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Rotas />
    </div>
  );
}

export default App;

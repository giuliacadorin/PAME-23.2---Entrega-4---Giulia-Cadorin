import React from "react";
import Rotas from "./Routes";
import { GlobalStyle } from "./styles";
import Header from "./Components/Header";

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

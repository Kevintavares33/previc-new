import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrar from "./CadastroMandato";
import TelaIncluirCaract from "./TelaIncluirCaract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastrar />} />
        <Route path="/tela" element={<TelaIncluirCaract />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

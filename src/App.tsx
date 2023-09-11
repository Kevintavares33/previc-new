import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrar from "./CadastroMandato";
import TelaIncluirCaract from "./IncluirCaracteristicas/TelaIncluirCaract";
import TelaIncluirFuncao from './IncluirFuncao/TelaIncluirFuncao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastrar />} />
        <Route path="/tela" element={<TelaIncluirCaract />} />
        <Route path="/incluirfuncao" element={<TelaIncluirFuncao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

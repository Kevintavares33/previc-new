import React from "react";
import TelaIncluirCaract from './TelaIncluirCaract'; 
import Cadastrar from "./CadastroMandato";
import { Route, Routes } from "react-router-dom"; 

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Cadastrar />} />
      <Route path="/tela" element={<TelaIncluirCaract />} />
    </Routes>
  );
};

export default Rotas;

import React from "react";
import TelaIncluirCaract from './IncluirCaracteristicas/TelaIncluirCaract'; 
import Cadastrar from "./CadastroMandato";
import TelaIncluirFuncao from './IncluirFuncao/TelaIncluirFuncao';
import { Route, Routes } from "react-router-dom"; 

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Cadastrar />} />
      <Route path="/tela" element={<TelaIncluirCaract />} />
      <Route path="/incluirfuncao" element={<TelaIncluirFuncao />} />
      
    </Routes>
  );
};

export default Rotas;

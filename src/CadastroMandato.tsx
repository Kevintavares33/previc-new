
import {Link} from 'react-router-dom'; 
import Sigin from './Assets/sign-in.png';
import './App.css';



function Cadastrar() {
  return (
   
    <div className='container-dado'>
      <h2>Cadastrar Mandato de Diretor Executivo</h2>
      
      <h6>DADOS PESSOAIS</h6>
      
      <div className='input-container'>
        <label className='label-cpf'>
          <span className='span-cpf'>CPF</span>
          <br />
          <input className='input-cpf' type='number' placeholder='Insira seu CPF' />
        </label>

        <label className='form-nome'>
          <span className='nome-span'>Nome Completo</span>
          <br />
          <input className='input-nome' type='number' placeholder='Insira seu Nome' />
        </label>

       <img src={Sigin}/>
      
      
      </div>

      
      <h6 className='dados-do-mandato'>Dados do Mandato</h6>
      
      <div className='container-mandato'>
         <label className='label-mandato'>
           <span>Entidade</span>
           <br />
          <select className='input-mandato'>
            <option value={'BRB'} >BRB</option>
            <option value={'BB'} >Banco do Brasil</option>
          </select>
         </label>

         <label className='form-mandato'>
          <span className='mandato-span'>Nome do Cargo</span>
          <br />
           <input className='input-cargo' type='text' placeholder='insira seu nome' />
         
         </label>
    </div>

    <div className='outros'>
       <label className='form-data'>
         <span className='data-span'>Data Inicial</span>
         <br />
         <input className='input-data' type='text' placeholder='13/13/2013' />
         </label>

         <label className='form-final'>
         <span className='mandato-span'>Data Final</span>
         <br />
         <input className='input-data-final' type='text' placeholder='03/03/2023' />
         </label>

      <div className='radio-group'>
       <span>Titular</span>
      <input className='from-check' type='checkbox'></input>
       <span>Suplente</span>
       <input className='from-check' type='checkbox'></input>
       </div>
    
    </div>

    <div className='segundo-menu'>
      <h3>Características</h3>
      <h3>Funções Especiais</h3>
      <h3>Habilitação</h3>  
    </div>
   
    <hr />
    <Link to="/tela">
  <button className='btb-menu2'> + Incluir Caracteristicas</button>
    </Link>

    <div className='btn-footer'>
      <button className='btn-cancelar'>Cancelar</button>
      <button className='btn-salvar'>Salvar</button>

    </div>
         
  </div>

    
  );
}
export default Cadastrar;
import Sigin from './Assets/sign-in.png';
import './App.css';




function App() {


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
          <input className='input-nome' type='text' placeholder='Insira seu Nome' />
        </label>

       <img src={Sigin}/>
      
      
      </div>

      
      <h6 className='dados-do-mandato'>Dados do Mandato</h6>
      
      <div className='container-mandato'>
         <label className='label-mandato'>
           <span>Entidade</span>
           <br />
           <input className='input-mandato' type='text'  />
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
       <div className='radio-button'></div>
       <span>Suplente</span>
       <div className='radio-button'></div>
       </div>
    
    </div>

    <div className='segundo-menu'>
      <a className='itens-menu2' href='/'>
      <h3>Características</h3>
      <h3>Funções Especiais</h3>
      <h3>Habilitação</h3>
      </a>
      
    </div>
   
    <hr />
    <button className='btb-menu2'>+ incluir Caracteristica</button>

    <div className='btn-footer'>
      <button className='btn-cancelar'>Cancelar</button>
      <button className='btn-salvar'>Salvar</button>

    </div>
         
  </div>
  );
}
export default App
import './Tela.css';

const TelaIncluirCaract = () => {
  return (
    <div className='card'>
           <h3>Incluir Caracteristicas</h3>
           <br /> 
            
          <div className='incluir-ctr'>
            <span className='paragrafo-ctr'>Caracteristicas</span>
          
          <select className='cacteristicas'>
            <option value={''} ></option>
            <option value={'Interino'} >Interino</option>
            <option value={'Dirigente Máximo'} >Dirigente Máximo</option>
            <option value={'Remunerado'} >Remunerado</option>
            <option value={'Minoria não Certioficada'} >Minoria não Certioficada</option>
          </select>
          </div>
        
        <div className='container'>
        
        <label>
         <br />
         <p>Data inicial</p>
         <input className='input-data-final' type='text' placeholder='03/03/2023' />
         </label>

         <label className='data-final'>
         <br />
         <p>Data Final</p>
         <input className='input-data-final' type='text' placeholder='03/03/2023' />
         </label>
         </div>
        
        <div className='Btn-rod-card'>
        <button className='cancelar-btn'> Cancelar</button>  
        <button className='incluir-btn'> incluir</button>  
          
        </div>     
    
    </div>
  )
}

export default TelaIncluirCaract;
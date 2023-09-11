import './IncluirFun.css';

const TelaIncluirFuncao = () => {
  return (
    <div className='card'>
           <h3>Incluir Função Especial</h3>
           <br /> 
            
          <div className='incluir-ctr'>
            <span className='paragrafo-funcoes'>Função Especial</span>
          
          <select className='funcoes'>
            <option value={''} ></option>
            <option value={'Administrador Estatutário Tecnicamente Qualificado (AETQ)'} >Administrador Estatutário Tecnicamente Qualificado (AETQ)</option>
            <option value={'Administrador Responsável pela Administração de Planos de Benefícios (ARPB) Máximo'} >Administrador Responsável pela Administração de Planos de Benefícios (ARPB) Máximo</option>
            <option value={'Administrador Responsável pela Gestão de Riscos (ARGR)'} >Administrador Responsável pela Gestão de Riscos (ARGR)</option>
            <option value={'Minoria Administrador Responsável pela Contabilidade Certioficada'} >Administrador Responsável pela Contabilidade</option>
            <option value={'Administrador Responsável pela Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo'} >Administrador Responsável pela Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo</option>
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

export default TelaIncluirFuncao;
import './assets/Reset.css'
import Corpo from "./assets/Componentes/Main/Index"
import Ola from "./assets/Componentes/Cabecalho/Index"
import Corpo2 from './assets/Componentes/Main2/Corpo2'
import styled from 'styled-components'


 const Body= styled.div`
 background-color: rgba(0, 0, 0, 0.9);
 ;

 `

function App() {

  return (
    <Body>
      <Ola></Ola>
      <Corpo/>
      <Corpo2/>
      
    </Body>
  ) 
  
}

export default App

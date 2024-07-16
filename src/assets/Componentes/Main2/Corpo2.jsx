import styled from "styled-components"
import Times from "../listaSuspensa"
import Videos from "../listaSuspensa/videos"
import VideosPro from "../VideosPro"
const Div = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
   button{ 
    border-radius:10px;
    font-size: 30px;
    width: 300px;
    padding: 20px;
    margin: 20px;
    border: none;}
`
const Videosstl= styled.div`

  display: flex;
    flex-wrap:wrap;
    font-size: 20px;
    margin: 20px;
    
    gap: 20px;
    
    iframe{
      margin: 0;
      border-radius: 10px 10px 0px 10px;
      
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: relative;
      top: -30px;
      padding: 0;
    }
    h1{
      font-size: 30px;
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight:400;
      color: ${prop=>prop.cor};
      padding-left:30px;
      border: none;
      border-radius:8px;
      bottom: -125px;
      position: relative;
      
    }
    section{
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 4px solid ${prop=>prop.cor};
      background-color: rgba(0, 0, 0, 0.9);
      
      border-radius:0 10px 10px 10px ;
      width: 100%;
      height: 20;
      
      
    }
    button{
      width: 150px;
      height: 30px;
      background-color: transparent;    
      color: #fff;
      font-size: 15px;
      text-align: center;
      padding: 0;
      
      


      

    }
    `
function Filtro(valor){
     const teste = Videos.filter(video => video.descricao === valor.nome)
   
    return(
        Object.values(teste).map((teste)=>{
          return(<VideosPro valor={valor} key='1' teste={teste}></VideosPro>)
        
        
       }))
      
}


const Botoes = ()=>{
    


    return(
    <Div>
        {Object.values(Times).map((valor, index) => (
          <div key={index}>
             <button  key={valor.nome} style={{backgroundColor:valor.corPrimaria}}>{valor.nome}</button>
             <Videosstl cor={valor.corPrimaria}>
                {Filtro(valor)}
             </Videosstl>
          </div>
        ))}
        
      </Div>
)
}


export default Botoes
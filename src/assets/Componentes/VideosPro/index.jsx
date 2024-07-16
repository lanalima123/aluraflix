import styled from "styled-components";

const Dividido = styled.div`
box-sizing: border-box;
  border: 4px solid ${(prop) => prop.cor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  
  height: 420px;
  border-radius: 10px;
  
  
  div{
    width: 100%;
    padding: 0;
    height: 100%;
    position: relative;
    box-shadow: inset 0px 0px 20px ${(prop) => prop.cor};
    
  
    
    
  }
`;
const Excluir = (event)=>{
  console.log(event)

};
const VideosPro = (prop) => {
  return (
    <Dividido cor={prop.valor.corPrimaria}>
      <div>
        <h1>{prop.valor.nome}</h1>
        <iframe
          width="500"
          height="315"
          src={prop.teste.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
          
      </div>

      <section>
        <button onClick={(event)=>Editar(event)}>Editar</button>
        <button onClick={event=> Excluir(event)}>Excluir</button>
      </section>
    </Dividido>
  );
};

export default VideosPro;

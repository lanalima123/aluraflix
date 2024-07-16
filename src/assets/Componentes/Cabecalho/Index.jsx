import styled from "styled-components";

/*const Section= styled.section`
display: flex;
flex-direction: column;*/

const Cabecalho = styled.div`
  margin: 0;
  padding:0;
  display: flex;
  position: fixed;
  background: rgba(38, 38, 38, 1);
  width: 100%;
  height: 125px;
  align-items: center;
  border-bottom: 4px solid blue;
  z-index:1;

  gap: 767px;
  top: 0px;
  left: 0px;
  justify-content: center;
  border-color: rgba(34, 113, 209, 1);
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
  div :nth-child(1) {
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    border: 2px solid rgba(34, 113, 209, 1);
    box-shadow: 0px 0px 12px 4px rgba(34, 113, 209, 1) inset;
  };
  div button{  
    width: 180.13px;
    height: 54px;
    gap: 0px;
    border-radius: 10px ;
    opacity: 0px;
  }
  img {
    width: 165px;
    height: 40px;
  }; 
  div{
    display: flex;
    gap: 20px;
  }
`;

const Ola = () => {
  return (
    <Cabecalho>
      <img src="/public/Imagens/image 1.png" alt="Imagem de uma garota" />
      <div>
        <button>Home</button>
        <button>Novo vídeo</button>
      </div>
    </Cabecalho>
  );
};

export default Ola;

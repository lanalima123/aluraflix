import styled from "styled-components";

const Main = styled.div`
  background-image: url("/Imagens/playerplayer.png");
  opacity: 0.7;
  color: #ffffff;
  width: 100%;
  height:800px;
  background-repeat: no-repeat; 
 &::before{
  opacity: 1;
  z-index: -1;
 }
  
`;
const Main1  = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  padding-top: 260px;
  background-repeat: no-repeat;
  div button{
    background-color: rgba(107, 209, 255, 1);
    font-size: 20px;
    padding: 20px;
    margin: 20px;
    border: none;
    border-radius: 10px;
    z-index: 1;
  }
  

`;
const Img = styled.img`
  width: 646px;
  height: 333px;
  border: 4px solid rgba(107, 209, 255, 1);
  box-shadow: 0px 0px 17px 8px rgba(107, 209, 255, 1) inset;
  border-radius: 4px;
`;
const Div = styled.div`
z-index: 1;
  
`;
const Main0= styled.div`
padding-top:150px;
background: rgba(0, 18, 51, 0.56);
height: 100%;
display: flex;
align-items: center;
justify-content: center;


`

const Corpo = () => {
  return (
    <Main0> 
      <Main>
        <Main1>
          <div>
            <button>Front-End</button>
            <p>
              Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
              começar uma app inspirada no desenho Pokémon com Nextjs e React,
              ver algumas dicas sobre performance e de quebra conhecer uma
              plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22
              minutos nesse vídeo feito com todo o carinho do mundo construindo
              uma !
            </p>
          </div>
          <Div>
            <Img src="/Imagens/playerplayer.png" alt="" />
          </Div>
        </Main1>
      </Main>
    </Main0>
  );
};

export default Corpo;

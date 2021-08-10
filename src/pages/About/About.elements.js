import styled from "styled-components";
import { Container } from "../../globalStyles";
import Idea from "../../assets/idea.png";
export const ContainerAbout = styled(Container)`
  display: flex;
  flex: 1;
  margin-top: 80px;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  ${Container}

`;

export const Wrapper = styled.div`

`;

export const TextWrapper = styled.div`

`;
export const Titulo = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  margin-top: 30px;
`;
export const Subtitulo = styled.h1`
  font-size: 20px;
  padding-bottom: 20px;
`;

export const Text = styled.p`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const Imagem = styled.div``;
export const Img = styled.img.attrs({
  src: `${Idea}`,
})`

  height: 310px;
  width: 452px;
  @media screen and (max-width: 960px) {
    
    height: 210px;
  width: 352px;
    
  }
`;

export const ImgTick = styled.img`
  margin-right: 10px;
`;

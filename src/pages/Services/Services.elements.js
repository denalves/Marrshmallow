import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 680px) {
    justify-content: center;
  }
`;

export const Subtitulo = styled.span`
  font-size: 20px;
`;

export const Titulo = styled.h1`
  font-size: 32px;
`;
export const ContainerServices = styled.div`
  padding: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
export const Cont = styled(Container)`
  ${Container}
`;

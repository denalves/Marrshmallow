import styled from "styled-components";
import ampulheta from "../../assets/group.png";

export const Info = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
    max-width : 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Titulo = styled.h1`
    color: #fff;
`;

export const Paragrafo = styled.p``;

export const Button = styled.button``;

export const ImageWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: flex-end;
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Img = styled.img.attrs({
  src: `${ampulheta}`,
})`

  height: 330px;
  width: 350px;
  
`;

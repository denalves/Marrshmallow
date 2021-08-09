import React from "react";
import { Container, Item, Imagem, Titulo, Subtitulo, Img } from "./Card.element";

const Card = ({ titulo, descricao, imagem }) => {
  return (
    <Container>
      <Item>
          <Imagem>
          <Img src={imagem} />
          </Imagem>
          <Titulo>{titulo}</Titulo>
          <Subtitulo>{descricao}</Subtitulo>
      </Item>
    </Container>
  );
};

export default Card;

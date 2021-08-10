import React from "react";


import { Container,  Preco, Titulo, Lista, Img, Item, Card, Button } from "./CardPlans.elements";
const CardPlans = ({ imagem, titulo, preco, item1, item2, item3, item4, item5 }) => {
  return (
    <Container>
      <Card>
        <Img src={imagem} />
        <Titulo>{titulo}</Titulo>
        <Preco>{preco}</Preco>
        <Lista>
            <Item>{item1}</Item>
            <Item>{item2}</Item>
            <Item>{item3}</Item>
            <Item>{item4}</Item>
            <Item>{item5}</Item>
        </Lista>
        <Button>Purchase Now</Button>
      </Card>
    </Container>
  );
};

export default CardPlans;

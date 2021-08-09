import React from "react";
import { Cont, Wrapper, Subtitulo, Titulo, CardTitle, CardDescription  } from "./Services.elements";
import  Card from '../../Components/Card/Card';
import Marketing from '../../assets/digital-marketing.svg';
const Services = (props) => {
  return (
    <Wrapper>
   
          <Subtitulo>We´re offering</Subtitulo>
          <Titulo>Creative Digital Agency</Titulo>

      <Wrapper>
          <Card imagem={Marketing} titulo="Integrated Marketing" descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"/>
          <Card imagem={Marketing} titulo="Integrated Marketing" descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"/>
          <Card imagem={Marketing} titulo="Integrated Marketing" descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"/>
          <Card imagem={Marketing} titulo="Integrated Marketing" descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"/>
          <Card imagem={Marketing} titulo="Integrated Marketing" descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"/>
          <Card imagem={Marketing} titulo="Integrated Marketing" descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"/>
      </Wrapper>
    </Wrapper>
  );
};

export default Services;

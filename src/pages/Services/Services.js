import React from "react";
import {
  Cont,
  ContainerServices,
  Wrapper,
  Subtitulo,
  Titulo,
  CardTitle,
  CardDescription,
} from "./Services.elements";
import Card from "../../Components/Card/Card";
import IntegratedMarketing from "../../assets/integrated-marketing.svg";
import DesignDevelopment from "../../assets/design-development.svg";
import DigitalStrategy from "../../assets/digital-strategy.svg";
import DigitalMarketing from "../../assets/digital-marketing.svg";
import GrowthStrategy from "../../assets/growth-strategy.svg";
import SavingStrategy from "../../assets/saving-strategy.svg";

const Services = (props) => {
  return (
    <Cont>
      <ContainerServices>
        <Subtitulo>We´re offering</Subtitulo>
        <Titulo>Creative Digital Agency</Titulo>
        </ContainerServices>
        <Wrapper>
          <Card
            imagem={IntegratedMarketing}
            titulo="Integrated Marketing"
            descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
          />
          <Card
            imagem={DesignDevelopment}
            titulo="Integrated Marketing"
            descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
          />
          <Card
            imagem={DigitalStrategy}
            titulo="Integrated Marketing"
            descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
          />
          <Card
            imagem={DigitalMarketing}
            titulo="Integrated Marketing"
            descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
          />
          <Card
            imagem={GrowthStrategy}
            titulo="Integrated Marketing"
            descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
          />
          <Card
            imagem={SavingStrategy}
            titulo="Integrated Marketing"
            descricao="Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
          />
        </Wrapper>
     
    </Cont>
  );
};

export default Services;

import React from "react";
import {
  ContainerAbout,
  Wrapper,
  Titulo,
  Subtitulo,
  Text,
  Imagem,
  Img,
  ImgTick,
  TextWrapper
} from "./About.elements";

import Tick from "../../assets/tick.png";

const About = () => {
  return (
    <ContainerAbout>
      <Wrapper>
        <TextWrapper>
        <Titulo>Discover New Idea With Us!</Titulo>
        <Subtitulo>Imagination will take us everywhere</Subtitulo>
        <Text><ImgTick src={Tick} />Lorem ipsum dolor sit amet, pretium pretium</Text>
        <Text><ImgTick src={Tick} />Lorem ipsum dolor sit amet, pretium pretium</Text>
        <Text><ImgTick src={Tick} />Lorem ipsum dolor sit amet, pretium pretium</Text>
        </TextWrapper>
      </Wrapper>
      <Wrapper>
        <Imagem>
          <Img/>
        </Imagem>
      </Wrapper>
    </ContainerAbout>
  );
};

export default About;

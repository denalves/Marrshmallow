import React from "react";
import {
  ContainerAbout,
  Wrapper,
  Titulo,
  Subtitulo,
  Text,
  Imagem,
  Img,
  ImgTick
} from "./About.elements";
import Idea from "../../assets/idea.png";
import Tick from "../../assets/tick.png";

const About = () => {
  return (
    <ContainerAbout>
      <Wrapper>
        <Titulo>Discover New Idea With Us!</Titulo>
        <Subtitulo>Imagination will take us everywhere</Subtitulo>
        <Text><ImgTick src={Tick} />Lorem ipsum dolor sit amet, pretium pretium</Text>
        <Text><ImgTick src={Tick} />Lorem ipsum dolor sit amet, pretium pretium</Text>
        <Text><ImgTick src={Tick} />Lorem ipsum dolor sit amet, pretium pretium</Text>
      </Wrapper>
      <Wrapper>
        <Imagem>
          <Img src={Idea} />
        </Imagem>
      </Wrapper>
    </ContainerAbout>
  );
};

export default About;

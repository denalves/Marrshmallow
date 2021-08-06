import React from "react";
import { Container } from "../../globalStyles";

import {
  Info,
  TextWrapper,
  Titulo,
  Paragrafo,
  Button,
  ImageWrapper,
  Img,
  InfoColumn
} from "./Home.elements";
const Home = () => {
  return (
    <>
      <Container>
        <Info>
            <InfoColumn>
          <TextWrapper>
            <Titulo>
              We Help Power Millions Of Businesses in 100+ Countries
            </Titulo>
            <Paragrafo>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Paragrafo>
            <Button>Learn more</Button>
          </TextWrapper>
          </InfoColumn>
          <InfoColumn>
          <ImageWrapper>
              
              <Img />
          </ImageWrapper>
          </InfoColumn>
        </Info>
      </Container>
    </>
  );
};

export default Home;

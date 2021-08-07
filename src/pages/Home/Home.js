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
  InfoColumn,
  Wrapper,
} from "./Home.elements";
const Home = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Info>
            <InfoColumn>
              <TextWrapper>
                <Titulo>
                  We Help Power Millions Of Businesses in 100+ Countries
                </Titulo>
                <Paragrafo>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,197.3C80,171,160,117,240,117.3C320,117,400,171,480,208C560,245,640,267,720,277.3C800,288,880,288,960,250.7C1040,213,1120,139,1200,122.7C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </Wrapper>
    </>
  );
};

export default Home;

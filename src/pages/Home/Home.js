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
        <svg style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L40,144C80,128,160,96,240,90.7C320,85,400,107,480,128C560,149,640,171,720,176C800,181,880,171,960,154.7C1040,139,1120,117,1200,112C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      
      </Wrapper>
      
    </>
  );
};

export default Home;

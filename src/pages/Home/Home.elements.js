import styled from "styled-components";
import ampulheta from "../../assets/group.png";


export const  Wrapper = styled.div`
 background-color: #3c37f1;
    color: #fff;
`;


export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 50%;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
    max-width : 540px;
    padding-top: 80px;

    @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Titulo = styled.h1`
    color: #fff;
    font-size: 34px;
    margin-bottom: 24px;
`;

export const Paragrafo = styled.p`
  max-width: 520px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px
`;

export const Button = styled.button`
  background-color: #1998ff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 16px 29px;
  color: #fff;
  font-weight: bold;
  border-radius: 50px;
`;



export const ImageWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
`;


export const Img = styled.img.attrs({
  src: `${ampulheta}`,
})`

  height: 330px;
  width: 350px;
  
`;


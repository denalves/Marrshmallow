import styled from "styled-components";

export const Container = styled.div`
  min-width: 250px;
  width: 300px;
  border: 1px solid #ccc;
 margin: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;


export const Card = styled.div`
    padding: 40px;
    text-align: center;

`;
export const Img = styled.img``;

export const Titulo = styled.h3`
font-size: 18px;
margin-top: 20px;
margin-bottom: 10px;
`;

export const Preco = styled.span`
    margin-bottom: 20px;
    font-size: 45px;
    color: #3C37F1;
    display: block;
`;

export const Lista = styled.ul`

`;
export const Item = styled.li`
    margin-bottom: 15px;
    color: #999;
`; 

export const Button = styled.button`
    padding: 15px 30px;
    border-radius: 50px;
    border: 1px solid #3C37F1;
    background-color: transparent;
    color: #3C37F1;
    font-weight: bold;

    &:hover{
        background-color: #3C37F1;
        cursor: pointer;
        color: #fff;
        transition: .2s ease-in;
    }
`;
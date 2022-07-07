import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Section = styled.section`
padding: 15px;
text-align: center;
background-color: lightgray;
`;

export const Title = styled.h2`
padding: 10px 0 10px 0;
background-color: #fff;
width: 450px;
margin-left: auto;
margin-right: auto;
`;

export const StatList = styled.ul`
width: 450px;
display: flex;
margin-left: auto;
margin-right: auto;
`;

export const ListItem = styled.li`
gap: 10px;
width: 100px;
height: 70px;
outline: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
background-color: ${getRandomHexColor()};
`;

export const ListItemLabel = styled.span`
font-size: 16px;
font-weight: 700;
`;

export const ListItemNum = styled.span`
color: darkblue;
font-weight: 500;
`;
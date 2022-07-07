import styled from 'styled-components';

export const List = styled.ul`
width: 1000px;
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
`;

export const Section = styled.section`
padding: 15px;
text-align: center;
background-color: lightgray;
`;

export const Status = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
border: 2px solid black;
background-color: ${p => p.isOnline ? "green" : "red"};
`;

export const DescriptionText = styled.p`
font-weight: 700;
`;

export const ListItem = styled.li`
gap: 20px;
width: 100%;
outline: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
background-color: #9dc1b2;
`;

export const Img = styled.img``;
import styled from 'styled-components';

export const ProfileContainer = styled.div`
padding: 15px;
text-align: center;
background-color: lightgray;
`;

export const DescriptionContainer = styled.div`
margin-left: auto;
margin-right: auto;
outline: 1px solid black;
background-color: #fff;
width: 450px;
padding-bottom: 10px;
`;

export const Image = styled.img`
width: 250px;
margin-bottom: 10px;
`; 

export const DescriptionText = styled.p`
margin-bottom: 10px;
:last-child {
    margin-bottom: 0;
}
`;

export const List = styled.ul`
width: 450px;
display: flex;
margin-left: auto;
margin-right: auto;
`;

export const ListItem = styled.li`
gap: 10px;
width: calc(700px / 4);
height: 70px;
outline: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #9dc1b2;
`;

export const ListItemLabel = styled.span`
font-size: 16px;
font-weight: 700;
`;

export const ListItemNum = styled.span`
color: darkblue;
font-weight: 500;
`;
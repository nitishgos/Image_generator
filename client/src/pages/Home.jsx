import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
const Container = styled.div`
height:100%;
overflow-y:scroll;
background:${({ theme }) => theme.bg};
padding:30px 30px;
padding-buttom: 50px;
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
@media (max-width: 768px){
padding:6px 10px;
}
`;
const Headline = styled.div`
font-size:34px;
font-weight:500;
color:${({ theme }) => theme.text_primary};
display:flex;
align-items:center;
flex-direction:column
@media (max-width:600px){
font-size:22px;
}
`;
const Span = styled.div`
font-size:30px;
font-weight:800;
color:${({ theme }) => theme.secondary};
@media (max-width:600px){
font-size:20px;
}
`;
const Home = () => {
    return (
      <Container>
        <Headline>Explore popular posts in the Community! Generated with AI</Headline>
        <Span>⦿ Generated with AI ⦿</Span>
        <SearchBar/>
      </Container>
  );
}

export default Home

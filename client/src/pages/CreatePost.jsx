import React from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';
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
const Wrapper = styled.div`
flex:1;
width:100%;
height:fit-content;
max-width:1200px;
gap:8%;
display:flex;
justify-content:center;
@media(max-width:768px){
flex-direction:column;
}
`;
const CreatePost = () => {
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm />
        <GeneratedImageCard/>
    </Wrapper>
    </Container>
  )
}

export default CreatePost

import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
flex:1;
padding:16px;
border:2px dashed ${({ theme }) => theme.yellow};
color:${({ theme }) => theme.arrow + 80};
border-radius:20px;
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
border-radius:24px;
background:${({ theme }) => theme.black + 50};
`;
const GeneratedImageCard = () => {
  return (
      <Container>
          <Image/>
    </Container>
  )
}

export default GeneratedImageCard

import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from "react-lazy-load-image-component";
const Card = styled.div`
position:relative;
display:flex;
border-radius:20px;
box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
cursor:pointer;
transition:all 0.3s ease;
&:hover{
box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
scale:1.05;
}
`;
const HoverOverlay = styled.div``;
const Author = styled.div``;
const Prompt = styled.div``;
const ImageCard = () => {
  return (
      <Card>
          <LazyLoadImage src="https://www.bing.com/th/id/OIP.7jpR1fZDpLLZXmA3eKv-_AHaFC?w=254&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&pid=3.1&rm=2&ucfimg=1" />
          <HoverOverlay>
              <Prompt>Prompt</Prompt>
              <Author>Author</Author>
          </HoverOverlay>
   </Card>
  )
}

export default ImageCard

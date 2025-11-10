import React from 'react';
import styled from 'styled-components';
import Button from "./button";
import {AddRounded} from "@mui/icons-material"
const Container = styled.div`
flex:1px;
background:{({theme})=>theme.navbar};
color:{({theme})=>theme.text_primary};
font-weight:bold;
font-size:22px;
padding:14px 50px;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
@media only screen and(max-width: 600px){
padding:10px 12px;
}
`;
const Navbar = () => {
  return (
      <Container>
          GenAI
          <Button text="Create new post" leftIcon={<AddRounded style={{
              fontSize: "18px",
          }}/>} />
    </Container>
  )
}

export default Navbar

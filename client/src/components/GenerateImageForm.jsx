import React from 'react'
import style from 'styled-components'
import Button from './button'
import TextInput from './TextInput'
import { AutoAwesome, CreateRounded } from '@mui/icons-material'
const Form = style.div`
flex: 1;
padding: 16px 20px;
display: flex;
flex-direction: column;
gap: 9%;
justify-content: center;
`;
const Top = style.div`
display: flex;
flex-direction: column;
gap: 6px;`;
const Title = style.div`
font-size: 28px;
font-weight: 500;
color: ${({ theme }) => theme.text_primary};`;
const Desc = style.div`
font-size: 17px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary};`;
const Body = style.div`
 display: flex;
flex-direction: column;
gap: 18px;
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary};`;
const Action = style.div`
flex: 1;
display: flex;
gap: 8px;`;
const GenerateImageForm = () => {
    return (
        <Form>
            <Top>
                <Title>Generate Image with prompt</Title>
                <Desc>Write your prompt according to the image you want to generate!</Desc>
            </Top>
            <Body>
                <TextInput label="Author" placeholder="Enter your name...." name="name" />
                <TextInput label="Prompt" placeholder="write the detailed prompt about image....." name="name" rows="8" textArea />
                **You can post the AI Generated Image to the Community**
            </Body>
            <Action>
                <Button text="Generate Image" flex leftIcon={<AutoAwesome />} />
                <Button text="Generate Image" type="secondary" flex leftIcon={<CreateRounded/>}/>
            </Action>
        </Form>
    );
}

export default GenerateImageForm

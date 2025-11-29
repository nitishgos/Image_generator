import React from "react";
import style from "styled-components";
import Button from "./button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { CreatePost, GenerateAIImage } from "../api/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setcreatePostLoading,
  generateImageLoading,
  setGenerateImageLoading,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await GenerateAIImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpge;base64,${res?.data?.photo}`,
        });
        setGenerateImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setGenerateImageLoading(false);
      });
  };
  const createPostFun = async () => {
    setcreatePostLoading(true);
    await CreatePost(post)
      .then((res) => {
        setcreatePostLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setcreatePostLoading(false);
      });
  };
  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>
          Write your prompt according to the image you want to generate!
        </Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name...."
          name="name"
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="write the detailed prompt about image....."
          name="name"
          rows="8"
          textArea
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        **You can post the AI Generated Image to the Community**
      </Body>
      <Action>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={() => {
            generateImageFun();
          }}
        />
        <Button
          text="Post Image"
          type="secondary"
          flex
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={
            post.name === "" || post.prompt === "" || post.photo === ""
          }
          onClick={() => {
            createPostFun();
          }}
        />
      </Action>
    </Form>
  );
};

export default GenerateImageForm;

// REACT
import React from "react";
// IMAGES
import { emptyChatImage } from "../../../Constants/data";
// MATERIAL UI
import { Box, Typography, Divider, styled } from "@mui/material";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 20px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const Subtitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weigth: 400;
  font-family: inherit;
`;

const StyleDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="Image" />
        <Title>WhatsApp web</Title>
        <Subtitle>
          Now send and receive messages without keeping your phone online.
        </Subtitle>
        <Subtitle>
          Use WhatsApp on up 4 linked devices and 1 phone at the same time.
        </Subtitle>
        <StyleDivider />
      </Container>
    </Component>
  );
};

export default EmptyChat;

// REACT
import React, { useContext } from "react";
// JWT-DECODE
import { jwtDecode } from "jwt-decode";
// IMAGES
import { qrCodeImage } from "../../Constants/data";
// GOOGLE AUTH
import { GoogleLogin } from "@react-oauth/google";
// MATERIAL UI
import { Dialog, Box, Typography, List, ListItem } from "@mui/material";
import styled from "@emotion/styled";
// CONTEXT
import { AccountContext } from "../../Context/AccountProvider";
// API
import { addUser } from "../../services/api";

const Component = styled(Box)`
  display: flex;
`;

const QRCode = styled("img")({
  height: 300,
  width: 300,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log("Login failed", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open whatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select whatsApp web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt="qr code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(25%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;

// REACT
import React, { useContext } from "react";
// COMPONENTES
import LoginDialog from "./Account/LoginDialog";
import ChatDialog from "./Chat/ChatDialog";
// MATERIAL UI
import { AppBar, Box, Toolbar, styled } from "@mui/material";
// CONTEXT
import { AccountContext } from "../Context/AccountProvider";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;

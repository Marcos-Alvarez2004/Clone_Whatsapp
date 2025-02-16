// REACT
import React, { useContext, useEffect, useState } from "react";
// CONTEXT
import { AccountContext } from "../../../Context/AccountProvider";
// COMPONENTES
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
// MATERIAL UI
import { Box } from "@mui/material";
// API
import { getConversation } from "../../../services/api";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;

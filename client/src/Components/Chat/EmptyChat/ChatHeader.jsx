// REACT
import React, { useContext } from "react";
// MATERIAL UI
import { Box, Typography, styled } from "@mui/material";
// MATERIAL UI ICONS
import { Search, MoreVert } from "@mui/icons-material";
// CONTEXT
import { AccountContext } from "../../../Context/AccountProvider";
// DATA
import { defaultProfilePicture } from "../../../Constants/data";

const Header = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px;
`;

const Status = styled(Typography)`
  margin-left: 12px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 24px;
    color: #000;
  }
`;

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture} alt="profile" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;

// REACT
import React, { useState } from "react";
// COMPONENTES
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
// MATERIAL UI
import { Box } from "@mui/material";

const Menu = () => {
  const [text, setText] = useState("");

  return (
    <Box>
      <Header />
      <Search setText={setText} />
      <Conversations text={text} />
    </Box>
  );
};

export default Menu;

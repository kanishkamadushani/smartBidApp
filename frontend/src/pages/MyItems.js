import React from "react";
import { Box } from "@mui/material";
import My_Items from "../components/MyItems";

const MyItems = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #bec81f 0%, #2E3A59 100%)",
        p: 2, // padding to avoid edge clipping on small screens
      }}
    >
      <My_Items />
    </Box>
  );
};

export default MyItems;

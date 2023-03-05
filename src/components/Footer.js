import React from "react";

import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="0px" bgcolor="#FFF3F4">
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "24px", xs: "16px" } }}
      pt="20px"
      textAlign="center"
      pb="20px"
    >
      Made with by mvtnhan
    </Typography>
  </Box>
);

export default Footer;

import React from "react";
import { InfinitySpin, ThreeDots } from "react-loader-spinner";

import { Stack } from "@mui/material";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <ThreeDots
      height="64"
      width="64"
      // radius="8"
      color="grey"
      //  ariaLabel="three-dots-loading"
      //  wrapperStyle={{}}
      //  wrapperClassName=""
      visible={true}
    />
    {/* <InfinitySpin color="grey" /> */}
  </Stack>
);

export default Loader;

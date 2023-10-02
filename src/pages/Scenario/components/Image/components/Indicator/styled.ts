import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  && {
    position: absolute;
    right: 2%;
    top: -20%;
    @media (max-width: 600px) {
      top: -10%;
    }
  }
`;

export const StyledIndicator = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-style: oblique;
    color: #ffffff;
  }
  &.active-indicator {
    color: yellow;
  }
`;

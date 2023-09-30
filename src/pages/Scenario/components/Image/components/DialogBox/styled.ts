import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledDialogBox = styled(Box)`
  && {
    height: auto;
    transition: all 0.5s ease;
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;
    padding: 1rem;
  }
`;

export const StyledDialogBoxText = styled(Typography)`
  && {
    color: #ffffff;
    text-align: justify;
  }
`;

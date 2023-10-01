import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Alagard from "./assets/fonts/Alagard.ttf";

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
    font-size: 1.5rem;
    color: #ffffff;
    text-align: justify;
    font-family: "Alagard", sans-serif;
  }
  @font-face {
    font-family: "Alagard";
    src: url(${Alagard}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

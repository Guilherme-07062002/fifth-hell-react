import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Alagard from "./assets/fonts/Alagard.ttf";

export const StyledDialogBox = styled(Box)`
  && {
    height: auto;
    transition: all 2s ease !important;
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    opacity: 0.7;
    @media (max-width: 600px) {
      opacity: 0.6;
    }
    &.collapsed {
      height: 10%;
    }
  }
`;

export const StyledDialogBoxText = styled(Typography)`
  && {
    font-size: 1.5rem;
    color: #ffffff;
    text-align: justify;
    /* font-family: "Alagard", sans-serif; */
    transition: all 1s ease !important;

    &.collapsed {
      display: none;
    }
  }
  @font-face {
    font-family: "Alagard";
    src: url(${Alagard}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

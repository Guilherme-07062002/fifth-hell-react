import Centurion from "./assets/fonts/Centurion.ttf";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const StyledDiceBox = styled(Box)`
  && {
    height: 50%;
    width: 80%;
    border-radius: 10px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease;
  }
`;

export const StyledDiceValue = styled(Typography)`
  && {
    font-size: 7rem;
    font-weight: bold;
    text-align: center;
    color: white;
    font-family: "Centurion", sans-serif;
  }
  @font-face {
    font-family: "Centurion";
    src: url(${Centurion}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

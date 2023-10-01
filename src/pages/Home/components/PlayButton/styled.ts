import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import Alagard from "./assets/fonts/Alagard.ttf";

export const StyledButton = styled(Button)``;

export const StyledButtonText = styled(Typography)`
  && {
    color: #ffffff;
    text-decoration: none;
    font-size: 2rem;

    font-family: "Alagard", sans-serif;
  }
  @font-face {
    font-family: "Alagard";
    src: url(${Alagard}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

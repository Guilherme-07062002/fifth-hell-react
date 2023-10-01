import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Alagard from "./assets/fonts/Alagard.ttf";

export const StyledButton = styled(Button)`
  && {
    position: absolute;
    bottom: 10vh;
  }
`;

export const StyledLink = styled(Link)`
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

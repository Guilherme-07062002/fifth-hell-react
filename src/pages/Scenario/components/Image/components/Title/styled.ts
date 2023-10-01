import { Typography } from "@mui/material";
import styled from "styled-components";
import Alagard from "./assets/fonts/Alagard.ttf";

export const StyledTypography = styled(Typography)`
  && {
    color: #ffffff;
    font-size: 2rem;
    position: absolute;
    top: 2%;
    left: 3%;
    font-family: "Alagard", sans-serif;
  }
  @font-face {
    font-family: "Alagard";
    src: url(${Alagard}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

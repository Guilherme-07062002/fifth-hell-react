import styled from "styled-components";
import Thertole from "./assets/fonts/Thertole.otf";
import { Typography } from "@mui/material";

export const StyledHomeTitle = styled(Typography)`
  && {
    color: #ffffff;
    font-size: 10rem;
    text-align: center;
    font-family: "Thertole", sans-serif;
  }
  @font-face {
    font-family: "Thertole";
    src: url(${Thertole}) format("truetype");
  }
`;

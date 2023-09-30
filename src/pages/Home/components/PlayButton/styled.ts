import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  }
`;

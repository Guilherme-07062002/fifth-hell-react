import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledOptionDiceButton = styled(Button)`
  && {
    height: 80%;
    width: 80%;
    background-color: #59112b;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: #7d1a3a;
    }
    @media (max-width: 600px) {
      margin-top: 1rem;
      height: 100%;
      width: 95%;
    }
  }
  &.active-button {
    border: 2px solid transparent;
    transition: border 0.3s ease;
    border-image: linear-gradient(45deg, yellow, #ff6600);
    border-image-slice: 1;
  }
`;

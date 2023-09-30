import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledOptionDiceButton = styled(Button)`
  && {
    height: 80%;
    background-color: #59112b;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: #7d1a3a;
    }
  }
`;

import styled from "styled-components";
import { Box } from "@mui/material";

interface StyledDiceBoxProps {
  showDices?: boolean;
}

export const StyledDiceBox = styled(Box)<StyledDiceBoxProps>`
  && {
    background-color: #bf0a4c;
    height: 50%;
    width: 80%;
    border-radius: 10px;
    background-image: ${(props) =>
      props.showDices
        ? "url('/src/pages/Scenario/components/OptionsMenu/components/DiceBox/assets/imgs/dices.gif')"
        : "none"};
  }
`;

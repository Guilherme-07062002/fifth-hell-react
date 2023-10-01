import { StyledDiceBox as Box, StyledDiceValue as Typography } from "./styled";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store";

/** Render dice box */
export const DiceBox = () => {
  const { rollDices, diceValue } = useSelector(
    (state: RootStateType) => state.app
  );
  const backgroundImage = rollDices
    ? "url('/src/pages/Scenario/components/OptionsMenu/components/DiceBox/assets/imgs/dice4.gif')"
    : "none";
  const backgroundColor = rollDices ? "transparent" : "#0F121C";

  return (
    <Box style={{ backgroundImage, backgroundColor }}>
      <Typography>{diceValue}</Typography>
    </Box>
  );
};

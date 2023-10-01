import { StyledDiceBox as Box, StyledDiceValue as Typography } from "./styled";
import { useMediaQuery, Theme, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store";

/** Render dice box */
export const DiceBox = () => {
  const { rollDices, diceValue } = useSelector(
    (state: RootStateType) => state.app
  );
  const backgroundValue = rollDices
    ? "url('/src/pages/Scenario/components/OptionsMenu/components/DiceBox/assets/imgs/dice4.gif')"
    : "none";
  const backgroundColor = rollDices ? "transparent" : "#0F121C";

  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) return null;

  return (
    <Box style={{ backgroundImage: backgroundValue, backgroundColor }}>
      <Typography>{diceValue}</Typography>
    </Box>
  );
};

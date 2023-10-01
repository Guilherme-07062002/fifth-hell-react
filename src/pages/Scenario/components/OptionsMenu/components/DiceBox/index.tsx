import { StyledDiceBox as Box } from "./styled";
import { useMediaQuery, Theme, useTheme, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store";

/** Render dice box */
export const DiceBox = () => {
  const { rollDices, diceValue } = useSelector(
    (state: RootStateType) => state.app
  );
  const backgroundValue = rollDices
    ? "url('/src/pages/Scenario/components/OptionsMenu/components/DiceBox/assets/imgs/dice.gif')"
    : "none";

  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) return null;

  return (
    <Box style={{ backgroundImage: backgroundValue }}>
      <Typography>{diceValue}</Typography>
    </Box>
  );
};

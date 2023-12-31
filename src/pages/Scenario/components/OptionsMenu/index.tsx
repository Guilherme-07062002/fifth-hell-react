import { OptionButton, OptionDiceButtonContainer, DiceBox } from "./components";
import { StyledPaper as Paper, StyledGrid as Grid } from "./styled";

/** Render options menu in scenario */
export const OptionsMenu = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Paper elevation={3}>
        <DiceBox />
        <OptionDiceButtonContainer />
        <OptionButton label="Next" />
      </Paper>
    </Grid>
  );
};

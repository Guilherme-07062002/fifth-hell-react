import { OptionButton, OptionDiceButtonContainer } from "./components";
import {
  StyledPaper as Paper,
  StyledBox as Box,
  StyledGrid as Grid,
} from "./styled";

/** Render options menu in scenario */
const OptionsMenu = () => {
  return (
    <Grid item xs={4}>
      <Paper elevation={3}>
        <Box />
        <OptionDiceButtonContainer />
        <OptionButton label="Next" />
      </Paper>
    </Grid>
  );
};
export default OptionsMenu;

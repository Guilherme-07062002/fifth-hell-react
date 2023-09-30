import { Grid } from "@mui/material";
import { OptionButton, OptionDiceButton } from "./components";
import { StyledPaper as Paper, StyledBox as Box } from "./styled";

/** Render options menu in scenario */
const OptionsMenu = () => {
  return (
    <Grid item xs={4}>
      <Paper elevation={3}>
        <Box />
        <Grid
          container
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <OptionDiceButton label="D6" />
          <OptionDiceButton label="D8" />
          <OptionDiceButton label="D10" />
          <OptionDiceButton label="D20" />
        </Grid>
        <OptionButton label="Next" />
      </Paper>
    </Grid>
  );
};
export default OptionsMenu;

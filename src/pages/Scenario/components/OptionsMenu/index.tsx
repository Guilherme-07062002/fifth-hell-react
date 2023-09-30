import { Grid, Paper, Box } from "@mui/material";
import { OptionButton, OptionDiceButton } from "./components";

/** Render options menu in scenario */
const OptionsMenu = () => {
  return (
    <Grid item xs={4}>
      <Paper
        elevation={3}
        sx={{
          paddingY: 2,
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#151926",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#BF0A4C",
            height: "50%",
            width: "90%",
            borderRadius: "10px",
          }}
        />
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

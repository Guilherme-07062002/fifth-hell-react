import { OptionButton, OptionDiceButtonContainer, DiceBox } from "./components";
import { StyledPaper as Paper, StyledGrid as Grid } from "./styled";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store";

/** Render options menu in scenario */
const OptionsMenu = () => {
  const { rollDices } = useSelector((state: RootStateType) => state.app);

  return (
    <Grid item xs={12} sm={4}>
      <Paper elevation={3}>
        <DiceBox showDices={rollDices} />
        <OptionDiceButtonContainer />
        <OptionButton label="Next" />
      </Paper>
    </Grid>
  );
};

export default OptionsMenu;

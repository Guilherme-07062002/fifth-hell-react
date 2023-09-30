import { OptionDiceButton } from "../OptionDiceButton";
import { StyledGrid as Grid } from "../../styled";

export const OptionDiceButtonContainer = () => {
  return (
    <Grid container>
      <OptionDiceButton label="D6" />
      <OptionDiceButton label="D8" />
      <OptionDiceButton label="D10" />
      <OptionDiceButton label="D20" />
    </Grid>
  );
};

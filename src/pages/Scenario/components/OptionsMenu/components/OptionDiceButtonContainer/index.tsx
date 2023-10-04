import { OptionDiceButton } from "../OptionDiceButton";
import { StyledGrid as Grid } from "../../styled";

export const OptionDiceButtonContainer = () => {
  return (
    <Grid container>
      <OptionDiceButton label="D6" sides={6} />
      <OptionDiceButton label="D8" sides={8} />
      <OptionDiceButton label="D10" sides={10} />
      <OptionDiceButton label="D12" sides={10} />
      <OptionDiceButton isd20 label="D20" sides={20} />
    </Grid>
  );
};

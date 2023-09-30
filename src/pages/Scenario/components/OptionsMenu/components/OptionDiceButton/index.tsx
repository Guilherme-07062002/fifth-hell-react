import { Grid } from "@mui/material";
import { StyledOptionDiceButton as Button } from "./styled";

type OptionDiceButtonProps = {
  label: string;
};

/** Render button in options menu */
export const OptionDiceButton = (data: OptionDiceButtonProps) => {
  return (
    <Grid item>
      <Button variant="contained" color="error" size="large">
        {data.label}
      </Button>
    </Grid>
  );
};

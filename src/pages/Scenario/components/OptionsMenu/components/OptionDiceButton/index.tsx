import { Grid } from "@mui/material";
import { StyledOptionDiceButton as Button } from "./styled";

type OptionDiceButtonProps = {
  label: string;
};

/** Render button in options menu */
export const OptionDiceButton = (data: OptionDiceButtonProps) => {
  return (
    <Grid item xs={2.4}>
      <Button variant="contained" color="error" size="large">
        {data.label}
      </Button>
    </Grid>
  );
};
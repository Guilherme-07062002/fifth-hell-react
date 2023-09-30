import { Grid, Button } from "@mui/material";
type OptionDiceButtonProps = {
  label: string;
};

/** Render button in options menu */
export const OptionDiceButton = (data: OptionDiceButtonProps) => {
  return (
    <Grid item xs={2.4}>
      <Button
        variant="contained"
        color="error"
        size="large"
        sx={{ height: "50%" }}
      >
        {data.label}
      </Button>
    </Grid>
  );
};


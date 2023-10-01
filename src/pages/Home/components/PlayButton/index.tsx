import { StyledButton as Button, StyledLink as Link } from "./styled";
import { Grid } from "@mui/material";

/** Render play button in Home */
export const PlayButton = () => {
  return (
    <Grid item xs={12} display={'flex'} justifyContent={"center"}
    alignItems={"center"}>
      <Button variant="contained" color="error" size="large">
        <Link to="/scenario">Play</Link>
      </Button>
    </Grid>
  );
};

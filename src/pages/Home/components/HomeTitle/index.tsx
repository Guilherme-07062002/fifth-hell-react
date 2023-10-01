import { StyledHomeTitle } from "./styled";
import { Grid } from "@mui/material";

/** Render home title */
export const HomeTitle = () => {
  const title = "Fifth of hell";
  return (
    <Grid
      item
      xs={12}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <StyledHomeTitle>{title}</StyledHomeTitle>
    </Grid>
  );
};

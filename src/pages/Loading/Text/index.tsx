import { StyledLoadingText as Text } from "./styled";
import { Grid } from "@mui/material";

/** Render loading text */
export const LoadingText = () => {
  const value = "Loading";
  return (
    <Grid
      item
      xs={12}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text>{value}</Text>
    </Grid>
  );
};

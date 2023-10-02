import { Box, Grid } from "@mui/material";
import { StyledContainer as Container } from "./styled";

/** Render loading screen */
export const LoadingScreen = () => {
  return (
    <Container component="main" maxWidth={false}>
      <Grid display={"flex"} flexDirection={"column"}>
        <Box
          component={"img"}
          src="/src/pages/Loading/assets/gifs/loading.gif"
        ></Box>
      </Grid>
    </Container>
  );
};

import { Box, Grid } from "@mui/material";
import { StyledContainer as Container } from "./styled";

/** Render loading screen */
export const LoadingScreen = () => {
  return (
    <Container component="main" maxWidth={false}>
      <Grid display={"flex"} flexDirection={"column"}>
        <Box
          component={"img"}
          src="https://github.com/Guilherme-07062002/fifth-hell-react/blob/main/src/pages/Loading/assets/gifs/loading.gif?raw=true"
        ></Box>
      </Grid>
    </Container>
  );
};

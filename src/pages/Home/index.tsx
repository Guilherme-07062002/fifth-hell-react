import { useEffect } from "react";
import { PlayButton, HomeTitle } from "./components";
import { StyledContainer as Container, StyledGrid as Grid } from "./styled";

/** Renderiza a página inicial */
export const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <Container component="main" maxWidth={false}>
      <Grid>
        <HomeTitle />
        <PlayButton />
      </Grid>
    </Container>
  );
};

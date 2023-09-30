import { useEffect } from "react";
import { PlayButton } from "./components/PlayButton";
import { StyledContainer as Container, StyledGrid as Grid } from "./styled";

/** Renderiza a página inicial */
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <Container component="main" maxWidth={false}>
      <Grid container>
        <PlayButton />
      </Grid>
    </Container>
  );
};

export default Home;

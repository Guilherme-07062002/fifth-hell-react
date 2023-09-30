import Image from "./components/Image";
import OptionsMenu from "./components/OptionsMenu";
import { useEffect } from "react";
import { StyledContainer as Container, StyledGrid as Grid } from "./styled";

/** Renderiza o cenário */
const Scenario = () => {
  useEffect(() => {
    document.title = "Scenario";
  });

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{ padding: { xs: 1, sm: 3 } }}
    >
      <Grid container>
        <Image />
        <OptionsMenu />
      </Grid>
    </Container>
  );
};

export default Scenario;

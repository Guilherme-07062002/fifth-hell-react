import { Container, Grid } from "@mui/material";
import Image from "./components/Image";
import OptionsMenu from "./components/OptionsMenu";
import { useEffect } from "react";

/** Renderiza o cenário */
const Scenario = () => {
  useEffect(() => {
    document.title = "Scenario";
  });

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        padding: { xs: 1, sm: 3 },
        backgroundColor: "#1B2626",
        height: "100vh",
      }}
    >
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Image />
        <OptionsMenu />
      </Grid>
    </Container>
  );
};

export default Scenario;

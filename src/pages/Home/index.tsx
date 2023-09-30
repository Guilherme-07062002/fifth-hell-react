import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { PlayButton } from "./components/PlayButton";

/** Renderiza a página inicial */
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        height: "100vh",
        backgroundColor: "#151926",
        // backgroundImage: 'url("/src/public/images/frame.png")',
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"end"}
        height={"100vh"}
      >
        <PlayButton />
      </Grid>
    </Container>
  );
};

export default Home;

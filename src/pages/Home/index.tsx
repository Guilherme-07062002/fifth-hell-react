import { Container, Typography, Grid, Button } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
        backgroundImage: 'url("/src/public/images/frame.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{ marginBottom: 10, width: "10%" }}
        >
          <Link
            style={{ color: "white", textDecoration: "none", fontSize: '2rem' }}
            to="/scenario"
          >
            Play
          </Link>
        </Button>
      </Grid>
    </Container>
  );
};

export default Home;

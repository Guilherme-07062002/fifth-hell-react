import { Container, Typography, Grid, Button, Paper } from "@mui/material";

/**
 * Renderiza a página inicial
 */
const Home = () => {
  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        padding: { xs: 1, sm: 3 },
        marginY: 1,
        maxWidth: { xl: "90%" },
      }}
    >
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"40vh"}
      >
        <Paper
          elevation={3}
          sx={{
            width: "80vw",
            height: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            Fifth of Hell
          </Typography>
        </Paper>

        <Button variant="contained" color="error">
          <Typography
            style={{
              fontSize: "2rem",
              color: "white",
            }}
          >
            Play
          </Typography>
        </Button>
      </Grid>
    </Container>
  );
};

export default Home;

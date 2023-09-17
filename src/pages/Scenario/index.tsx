import { Container, Typography, Grid, Paper } from "@mui/material";
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
            Scenario
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Scenario;

import { Container, Typography, Grid, Paper, Box, Button } from "@mui/material";
import Image from "./components/Image";
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

        <Grid item xs={4}>
          <Paper
            elevation={3}
            sx={{
              height: "90vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#151926",
              border: "solid 1px white",
            }}
          >
            <Box
              sx={{
                backgroundColor: "grey",
                height: "50%",
                width: "90%",
              }}
            />
            <Box
              sx={{
                backgroundColor: "green",
                height: "10%",
                width: "90%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "white" }}>Roll: </Typography>
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{ width: "10%" }}
              >
                D12
              </Button>
            </Box>
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ width: "90%" }}
            >
              Opção
            </Button>
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ width: "90%" }}
            >
              Opção
            </Button>
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ width: "90%" }}
            >
              Opção
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Scenario;

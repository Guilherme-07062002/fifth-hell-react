import { Grid, Paper, Box, Button } from "@mui/material";

/** Render options menu in scenario */
const OptionsMenu = () => {
  return (
    <Grid item xs={4}>
      <Paper
        elevation={3}
        sx={{
          paddingY: 2,
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#151926",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#BF0A4C",
            height: "50%",
            width: "90%",
            borderRadius: "10px",
          }}
        />
        <Grid
          container
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={2.4}>
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ height: "50%" }}
            >
              D6
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ height: "50%" }}
            >
              D8
            </Button>
          </Grid>
          <Grid item xs={2.7}>
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ height: "50%" }}
            >
              D10
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ height: "50%" }}
            >
              D20
            </Button>
          </Grid>
        </Grid>
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
  );
};
export default OptionsMenu;

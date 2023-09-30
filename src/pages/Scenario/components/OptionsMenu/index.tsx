import { Grid, Paper, Typography, Box, Button } from "@mui/material";

/** Render options menu in scenario */
const OptionsMenu = () => {
  return (
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
  );
};
export default OptionsMenu;

import { Grid, Paper, Typography, Box } from "@mui/material";

/** Render Image in Scenario */
const Image = () => {
  return (
    <Grid item xs={7}>
      <Paper
        elevation={3}
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#151926",
          border: "solid 1px white",
        }}
      >
        <Typography
          textAlign={"left"}
          sx={{ marginLeft: 3, paddingY: 2, color: "white" }}
        >
          Scenario
        </Typography>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "grey",
          }}
        />
      </Paper>
    </Grid>
  );
};

export default Image;

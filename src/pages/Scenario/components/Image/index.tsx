import { Grid, Paper, Typography, Box } from "@mui/material";

/** Render Image in Scenario */
const Image = () => {
  return (
    <Grid item xs={8}>
      <Paper
        elevation={3}
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#151926",
        }}
      >
        <Typography
          textAlign={"left"}
          sx={{ marginLeft: 3, paddingY: 1, color: "white", fontSize: "2rem" }}
        >
          Scenario
        </Typography>
        <Box
          component="img"
          src="/src/pages/Scenario/components/Image/assets/imgs/ForestDark.png"
          sx={{
            height: "100%",
            width: "100%",
          }}
        />
      </Paper>
    </Grid>
  );
};

export default Image;

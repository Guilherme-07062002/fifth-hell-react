import { Grid, Paper, Typography, Box } from "@mui/material";

/** Render Image in Scenario */
const Image = () => {
  return (
    <Grid item xs={8}>
      <Paper
        elevation={3}
        sx={{
          height: "90vh",
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
            width: "100%",
            zIndex: 0,
          }}
        />
        <Box
          component="div"
          sx={{
            height: "20%",
            width: "100%",
            backgroundColor: "black",
            zIndex: 1,
            position: "relative",
            bottom: "17%",
            opacity: 0.7,
          }}
        />
      </Paper>
    </Grid>
  );
};

export default Image;

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
          position: "relative",
        }}
      >
        <Typography
          textAlign={"left"}
          sx={{
            marginLeft: 3,
            paddingY: 1,
            color: "white",
            fontSize: "2rem",
            position: "absolute",
          }}
        >
          Scenario
        </Typography>
        <Box
          component="div"
          sx={{
            height: "30%",
            width: "100%",
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.7,
            bottom: 0,
          }}
        />
        <Box
          component="img"
          src="/src/pages/Scenario/components/Image/assets/imgs/ForestDark.png"
          sx={{
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      </Paper>
    </Grid>
  );
};

export default Image;

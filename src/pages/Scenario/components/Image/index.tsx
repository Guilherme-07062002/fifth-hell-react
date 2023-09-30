import { Grid, Box } from "@mui/material";
import { StyledPaper as Paper } from "./styled";
import { Title } from "./components";

/** Render Image in Scenario */
const Image = () => {
  return (
    <Grid item xs={8}>
      <Paper elevation={3}>
        <Title label="Scenario" />
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

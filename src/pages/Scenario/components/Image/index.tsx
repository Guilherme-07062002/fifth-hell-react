import { Grid, Box } from "@mui/material";
import { StyledPaper as Paper } from "./styled";
import { Title, DialogBox } from "./components";

/** Render Image in Scenario */
const Image = () => {
  return (
    <Grid item xs={8}>
      <Paper elevation={3}>
        <Title label="Scenario" />
        <DialogBox />
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

import { Grid } from "@mui/material";
import { StyledPaper as Paper } from "./styled";
import { Title, DialogBox, BackgroundImage } from "./components";

/** Render Image in Scenario */
export const Image = () => {
  return (
    <Grid item xs={8}>
      <Paper elevation={3}>
        <Title label="Scenario" />
        <DialogBox />
        <BackgroundImage src="/src/pages/Scenario/components/Image/assets/imgs/ForestDark.png" />
      </Paper>
    </Grid>
  );
};

export default Image;

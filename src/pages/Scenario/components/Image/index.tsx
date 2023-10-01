import { Grid } from "@mui/material";
import { StyledPaper as Paper } from "./styled";
import { Title, DialogBox, BackgroundImage } from "./components";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store";

/** Render Image in Scenario */
export const Image = () => {
  const { stages, currentStage } = useSelector(
    (state: RootStateType) => state.app
  );
  const { title, description, image } = stages[currentStage];
  return (
    <Grid item xs={12} sm={8}>
      <Paper elevation={3}>
        <Title label={title} />
        <DialogBox />
        <BackgroundImage src={image} />
      </Paper>
    </Grid>
  );
};

export default Image;

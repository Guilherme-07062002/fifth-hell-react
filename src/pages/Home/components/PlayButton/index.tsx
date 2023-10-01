import { StyledButton as Button, StyledLink as Link } from "./styled";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLoading } from "@/store";

/** Render play button in Home */
export const PlayButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setLoading(true));
  };

  return (
    <Grid
      item
      xs={12}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button variant="contained" size="large" onClick={handleClick}>
        Play
      </Button>
    </Grid>
  );
};

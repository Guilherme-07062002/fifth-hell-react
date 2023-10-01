import { StyledButton as Button, StyledButtonText as Text } from "./styled";
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
      <Button
        variant="contained"
        size="large"
        color="error"
        onClick={handleClick}
      >
        <Text>Play</Text>
      </Button>
    </Grid>
  );
};

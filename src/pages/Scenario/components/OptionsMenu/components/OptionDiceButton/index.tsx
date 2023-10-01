import { Grid } from "@mui/material";
import { StyledOptionDiceButton as Button } from "./styled";
import { useDispatch } from "react-redux";
import { setRollDices } from "@/store";

type OptionDiceButtonProps = {
  label: string;
};

/** Render button in options menu */
export const OptionDiceButton = (data: OptionDiceButtonProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setRollDices(true));

    setTimeout(() => {
      dispatch(setRollDices(false));
    }, 3000);
  };
  return (
    <Grid item>
      <Button variant="contained" size="large" onClick={handleClick}>
        {data.label}
      </Button>
    </Grid>
  );
};

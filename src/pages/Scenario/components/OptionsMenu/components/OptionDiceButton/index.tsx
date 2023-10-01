import { Grid } from "@mui/material";
import { StyledOptionDiceButton as Button } from "./styled";
import { useDispatch } from "react-redux";
import { setRollDices, setDiceValue } from "@/store";

type OptionDiceButtonProps = {
  label: string;
  sides: number;
};

/** Render button in options menu */
export const OptionDiceButton = (data: OptionDiceButtonProps) => {
  const { sides, label } = data;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setRollDices(true));
    dispatch(setDiceValue(null));
    setTimeout(() => {
      dispatch(setDiceValue(Math.floor(Math.random() * sides) + 1));
      dispatch(setRollDices(false));
    }, 3000);
  };
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={2}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Button variant="contained" size="large" onClick={handleClick}>
        {label}
      </Button>
    </Grid>
  );
};

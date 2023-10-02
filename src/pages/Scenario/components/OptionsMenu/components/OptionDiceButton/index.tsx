import { Grid } from "@mui/material";
import { StyledOptionDiceButton as Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setRollDices, setDiceValue } from "@/store";
import { RootStateType } from "@/store";
import { useState, useEffect } from "react";

type OptionDiceButtonProps = {
  label: string;
  sides: number;
};

/** Render button in options menu */
export const OptionDiceButton = (data: OptionDiceButtonProps) => {
  const { currentStage, stages } = useSelector(
    (state: RootStateType) => state.app
  );
  const { rollDice } = stages[currentStage];
  const [indicatorColor, setIndicatorColor] = useState(false);
  useEffect(() => {
    if (rollDice) setIndicatorColor(true);
  });

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
      <Button
        variant="contained"
        size="large"
        onClick={handleClick}
        className={indicatorColor ? "active-button" : ""}
      >
        {label}
      </Button>
    </Grid>
  );
};

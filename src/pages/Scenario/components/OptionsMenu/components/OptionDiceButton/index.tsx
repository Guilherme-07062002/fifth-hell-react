import { Grid } from "@mui/material";
import { StyledOptionDiceButton as Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setRollDices, setDiceValue } from "@/store";
import { RootStateType } from "@/store";
import { useState, useEffect } from "react";

type OptionDiceButtonProps = {
  label: string;
  sides: number;
  isd20?: boolean;
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
    else setIndicatorColor(false);
  });

  const { sides, label, isd20 } = data;
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
      xs={isd20 ? 10 : 6}
      sm={6}
      md={6}
      lg={2}
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
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

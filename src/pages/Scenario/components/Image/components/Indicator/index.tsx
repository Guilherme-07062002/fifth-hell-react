import { StyledBox as Box, StyledIndicator as Typography } from "./styled";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store";

/** Render a indicator message */
export const Indicator = () => {
  const { stages, currentStage } = useSelector(
    (state: RootStateType) => state.app
  );
  const stage = stages[currentStage];
  const message = stage.continue
    ? "Continue"
    : stage.rollDice
    ? "Roll the Dice!"
    : "";
  return (
    <Box component={"div"}>
      <Typography>{message}</Typography>
    </Box>
  );
};

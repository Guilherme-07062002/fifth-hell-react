import { StyledOptionButton as Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { advanceStage } from "@/store";
import { RootStateType } from "@/store";

type OptionButtonProps = {
  label: string;
};

/** Render button in options menu */
export const OptionButton = (data: OptionButtonProps) => {
  const dispatch = useDispatch();
  const { collapseDialogBox, stages, currentStage } = useSelector(
    (state: RootStateType) => state.app
  );
  const isTheEnd = stages[currentStage].theEnd;
  const handleClick = () => {
    dispatch(advanceStage());
  };
  if (collapseDialogBox || isTheEnd) return null;

  return (
    <Button
      variant="contained"
      color="error"
      size="large"
      onClick={handleClick}
    >
      {data.label}
    </Button>
  );
};

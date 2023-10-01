import { StyledOptionButton as Button } from "./styled";
import { useDispatch } from "react-redux";
import { advanceStage } from "@/store";

type OptionButtonProps = {
  label: string;
};

/** Render button in options menu */
export const OptionButton = (data: OptionButtonProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(advanceStage());
  };
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

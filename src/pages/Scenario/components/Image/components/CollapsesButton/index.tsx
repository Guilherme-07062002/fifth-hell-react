import { StyledButton as Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "@/store";
import { setCollapseDialogBox } from "@/store";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

/** Render collapse dialog box button */
export const CollapsesButton = () => {
  const { collapseDialogBox } = useSelector(
    (state: RootStateType) => state.app
  );
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setCollapseDialogBox());
  }
  return (
    <Button onClick={handleClick} size="large">
      {collapseDialogBox ? <ArrowCircleUpIcon /> : <ArrowCircleDownIcon />}
    </Button>
  );
};

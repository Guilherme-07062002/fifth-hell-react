import {
  StyledDialogBox as Box,
  StyledDialogBoxText as Typography,
} from "./styled";

import { Indicator } from "../Indicator";
import { CollapsesButton } from "../CollapsesButton";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store";

type DialogBoxProps = {
  text: string;
};

/** Render dialog box in Image */
export const DialogBox = (data: DialogBoxProps) => {
  const { text } = data;
  const collapseDialogBox = useSelector(
    (state: RootStateType) => state.app.collapseDialogBox
  );

  return (
    <Box component="div" className={collapseDialogBox ? "collapsed" : ""}>
      <CollapsesButton />
      <Indicator />
      <Typography className={collapseDialogBox ? "collapsed" : ""}>
        {text}
      </Typography>
    </Box>
  );
};

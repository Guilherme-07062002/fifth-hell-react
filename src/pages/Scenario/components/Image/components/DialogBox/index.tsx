import {
  StyledDialogBox as Box,
  StyledDialogBoxText as Typography,
} from "./styled";

import { Indicator } from "../Indicator";
import { CollapsesButton } from "../CollapsesButton";

type DialogBoxProps = {
  text: string;
};

/** Render dialog box in Image */
export const DialogBox = (data: DialogBoxProps) => {
  const { text } = data;
  return (
    <Box component="div">
      <CollapsesButton />
      <Indicator />
      <Typography>{text}</Typography>
    </Box>
  );
};

import {
  StyledDialogBox as Box,
  StyledDialogBoxText as Typography,
} from "./styled";

type DialogBoxProps = {
  text: string;
};

/** Render dialog box in Image */
export const DialogBox = (data: DialogBoxProps) => {
  const { text } = data;
  return (
    <Box component="div">
      <Typography>{text}</Typography>
    </Box>
  );
};

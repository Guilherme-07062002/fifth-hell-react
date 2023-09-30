import { Button } from "@mui/material";

type OptionButtonProps = {
  label: string;
};

/** Render button in options menu */
export const OptionButton = (data: OptionButtonProps) => {
  return (
    <Button
      variant="contained"
      color="error"
      size="large"
      sx={{ width: "90%" }}
    >
      {data.label}
    </Button>
  );
};

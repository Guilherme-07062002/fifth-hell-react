import { StyledOptionButton as Button } from "./styled";

type OptionButtonProps = {
  label: string;
};

/** Render button in options menu */
export const OptionButton = (data: OptionButtonProps) => {
  return (
    <Button variant="contained" color="error" size="large">
      {data.label}
    </Button>
  );
};

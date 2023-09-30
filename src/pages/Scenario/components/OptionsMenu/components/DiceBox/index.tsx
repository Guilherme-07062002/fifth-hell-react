import { StyledDiceBox as Box } from "./styled";
import { useMediaQuery, Theme, useTheme } from "@mui/material";

type DiceBoxProps = {
  showDices?: boolean;
};

/** Render dice box */
export const DiceBox = (data: DiceBoxProps) => {
  const theme = useTheme<Theme>();
  //Use useMediaQuery to check if the screen is smaller than the tablet breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //If it is less than the tablet breakpoint, do not render the DiceBox
  if (isMobile) return null;

  return <Box showDices={data.showDices} />;
};

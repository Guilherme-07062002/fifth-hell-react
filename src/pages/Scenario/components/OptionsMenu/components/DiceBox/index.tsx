import { StyledDiceBox as Box } from "./styled";

type DiceBoxProps = {
  showDices?: boolean;
};

/** Render dice box */
export const DiceBox = (data: DiceBoxProps) => {
  return <Box showDices={data.showDices} />;
};

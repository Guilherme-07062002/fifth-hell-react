import { useState, useEffect } from "react";
import { StyledDiceBox as Box, StyledDiceValue as Typography } from "./styled";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store";

/** Render dice box */
export const DiceBox = () => {
  const { rollDices, diceValue } = useSelector(
    (state: RootStateType) => state.app
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src =
      "https://github.com/Guilherme-07062002/fifth-hell-react/blob/main/src/pages/Scenario/components/OptionsMenu/components/DiceBox/assets/imgs/dice4.gif?raw=true";
  }, []);

  const backgroundImage =
    rollDices && imageLoaded
      ? "url('https://github.com/Guilherme-07062002/fifth-hell-react/blob/main/src/pages/Scenario/components/OptionsMenu/components/DiceBox/assets/imgs/dice4.gif?raw=true')"
      : "none";
  const backgroundColor = rollDices && imageLoaded ? "transparent" : "#0F121C";

  return (
    <Box style={{ backgroundImage, backgroundColor }}>
      <Typography>{diceValue}</Typography>
    </Box>
  );
};

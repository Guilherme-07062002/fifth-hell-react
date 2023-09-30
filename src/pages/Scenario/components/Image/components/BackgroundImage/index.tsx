import { Box } from "@mui/material";

/** Render background image */
export const BackgroundImage = () => {
  return (
    <Box
      component="img"
      src="/src/pages/Scenario/components/Image/assets/imgs/ForestDark.png"
      sx={{
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

import { Box } from "@mui/material";

type BackgroundImageProps = {
  src: string;
};

/** Render background image */
export const BackgroundImage = (data: BackgroundImageProps) => {
  const { src } = data;
  return (
    <Box
      component="img"
      src={src}
      sx={{
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

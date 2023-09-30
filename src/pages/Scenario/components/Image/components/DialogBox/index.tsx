import { Box, Typography } from "@mui/material";

/** Render dialog box in Image */
export const DialogBox = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "auto",
        transition: "all 0.5s ease",
        width: "100%",
        backgroundColor: "black",
        position: "absolute",
        bottom: 0,
        padding: "1rem",
      }}
    >
      <Typography style={{ color: "#fffff", textAlign: "justify" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ultrices nisl sed enim finibus, a ultricies ligula pharetra. Fusce leo
        mauris, pretium in pharetra at, suscipit sed mi. Nulla vel urna nec diam
        ornare blandit vel at sapien. Pellentesque ante nibh, elementum vel
        tristique dictum, posuere in justo. Suspendisse ullamcorper nulla sem.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas.
      </Typography>
    </Box>
  );
};

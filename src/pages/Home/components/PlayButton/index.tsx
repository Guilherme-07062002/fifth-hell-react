import { Button } from "@mui/material";
import { Link } from "react-router-dom";

/** Render play button in Home */
export const PlayButton = () => {
  return (
    <Button
      variant="contained"
      color="error"
      size="large"
      sx={{ position: "absolute", bottom: "10vh" }}
    >
      <Link
        style={{ color: "white", textDecoration: "none", fontSize: "2rem" }}
        to="/scenario"
      >
        Play
      </Link>
    </Button>
  );
};

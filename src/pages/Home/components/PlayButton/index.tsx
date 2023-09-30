import { StyledButton as Button, StyledLink as Link } from "./styled";

/** Render play button in Home */
export const PlayButton = () => {
  return (
    <Button variant="contained" color="error" size="large">
      <Link to="/scenario">Play</Link>
    </Button>
  );
};

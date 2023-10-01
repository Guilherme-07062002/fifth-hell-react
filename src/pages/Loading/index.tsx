import { StyledContainer as Container } from "./styled";
import { LoadingText } from "./Text";

export const LoadingScreen = () => {
  return (
    <Container component="main" maxWidth={false}>
      <LoadingText />
    </Container>
  );
};

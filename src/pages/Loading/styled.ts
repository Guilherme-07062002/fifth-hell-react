import { Container } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  && {
    height: 100vh;
    background-color: #151926;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

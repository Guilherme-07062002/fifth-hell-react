import { Container } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #151926;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

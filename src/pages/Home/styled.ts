import { Container, Grid } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  && {
    height: 100vh;
    background-color: #151926;
  }
`;

export const StyledGrid = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 100vh;
  }
`;

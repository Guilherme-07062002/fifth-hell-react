import { Container, Grid } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  && {
    background-color: #1b2626;
    height: 100%;
    @media (max-width: 600px) {
      margin: 0;
      padding: 0;
      height: 100vh;
    }
  }
`;

export const StyledGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

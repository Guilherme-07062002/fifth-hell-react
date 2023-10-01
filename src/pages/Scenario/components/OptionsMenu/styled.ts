import styled from "styled-components";
import { Paper, Grid } from "@mui/material";

export const StyledPaper = styled(Paper)`
  && {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #151926;

    @media (max-width: 600px) {
      padding-top: 5%;
      padding-bottom: 5%;
      height: 50vh;
    }
  }
`;

export const StyledGrid = styled(Grid)`
  && {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 600px) {
      justify-content: space-between;
      margin-bottom: 5%;
      margin-top: 500 !important;
    }
  }
`;

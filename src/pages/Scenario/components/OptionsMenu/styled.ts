import styled from "styled-components";
import { Paper, Grid } from "@mui/material";

export const StyledPaper = styled(Paper)`
  && {
    padding-top: 2px;
    padding-bottom: 2px;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #151926;
  }
`;

export const StyledGrid = styled(Grid)`
  && {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

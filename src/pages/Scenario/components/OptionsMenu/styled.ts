import styled from "styled-components";
import { Paper, Box } from "@mui/material";

export const StyledPaper = styled(Paper)`
  && {
    padding-top: 2px;
    padding-bottom: 2px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #151926;
  }
`;

export const StyledBox = styled(Box)`
  && {
    background-color: #bf0a4c;
    height: 50%;
    width: 90%;
    border-radius: 10px;
  }
`;

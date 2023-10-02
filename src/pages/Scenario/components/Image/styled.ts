import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  && {
    height: 90vh;
    background-color: #151926;
    position: relative;
    @media (max-width: 600px) {
      height: 80vh;
    }
  }
`;

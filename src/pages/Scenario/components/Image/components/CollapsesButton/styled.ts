import { IconButton, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(IconButton)`
  && {
    position: absolute;
    left: 2%;
    top: -25%;
    color: #ffffff;
    @media (max-width: 800px) {
      top: -3rem;
    }
    @media (max-width: 600px) {
      top: -3rem;
    }
    &.rotate {
      transform: rotate(180deg); /* Aplica a rotação de 180 graus */
      transition: transform 0.3s ease; /* Adiciona uma transição suave */
    }
  }
  &&.MuiButton-root {
    .MuiTouchRipple-root {
      display: none;
    }
  }
`;

export const StyledIndicator = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-style: oblique;
    color: #ffffff;
  }
  &.active-indicator {
    color: yellow;
  }
`;

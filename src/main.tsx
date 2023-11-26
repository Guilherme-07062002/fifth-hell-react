import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Analytics } from "@vercel/analytics/react";

import App from "./App";
import defaultTheme from "./configs/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <App />
        <Analytics />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

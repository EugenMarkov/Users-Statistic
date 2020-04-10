import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes/Routes";
import theme from "./theme/theme";
import "./theme/index.scss";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

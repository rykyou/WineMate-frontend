import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./containers/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8a437c",
      main: "#5b2350",
      dark: "#2f0028",
      contrastText: "#fff"
    },
    secondary: {
      light: "#dab9cb",
      main: "#a8899a",
      dark: "#795c6c",
      contrastText: "#fff",
      mainGradient: "linear-gradient(180deg, #a8899a 10%, #fff 60%)"
    }
  },
  typography: {
    fontFamily: [
      "Source Sans Pro",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      "Arial",
      "sans-serif"
    ].join(","),
    useNextVariants: true
  }
});

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

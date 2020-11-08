import { Component } from "react";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors/";
import Nav from "./navigation/Nav";
import Overview from "./overview/Overview";
import HospiceInfo from "./contents/HospiceInfo";

export const theme = createMuiTheme({
  typography: {
    h4: {
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "2rem",
      color: grey[600],
    },
  },
  palette: {
    primary: {
      main: red[400],
    },
    type: "dark",
    secondary: {
      main: grey[100],
    },
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Nav />
        <Overview />
        <HospiceInfo />
      </ThemeProvider>
    );
  }
}

export default App;

import { Component } from "react";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors/";
import Nav from "./navigation/Nav";
import Overview from "./overview/Overview";
import HospiceInfo from "./contents/HospiceInfo";
import Team from "./contents/Team";

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Arial',
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif'
    ].join(','),
    h4: {
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "2rem",
      color: grey[600],
    },
    button: {
      fontSize: "1.5rem",
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
        <Team />
      </ThemeProvider>
    );
  }
}

export default App;

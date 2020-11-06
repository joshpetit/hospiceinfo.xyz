import { Component } from 'react';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors/';
import Nav from './navigation/Nav';
import Overview from './overview/Overview';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[400],
    },
    type: "dark",
    background: {
      default: "#222222",
    },
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
      </ThemeProvider>
    );
  }
}

export default App;

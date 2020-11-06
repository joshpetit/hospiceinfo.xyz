import React from "react";
import { Component } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import { theme } from "../App";
import { red } from '@material-ui/core/colors/'
const styles = {
  card: {
    background: theme.palette.secondary.main,
    margin: "5px",
  },
  button: {
    background: theme.palette.primary.main,
  },
  container: {
    background: theme.palette.secondary.main,
  },
};

export default class Overview extends Component {
  render() {
    return (
      <Container>
        <Box m={1} boxShadow={5} style={styles.container}>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item xs={4}>
              <Card style={styles.card}>
                <CardContent style={{color: 'black'}}>
                  <Typography  align="center" variant="h4">
                    What is Hospice?
                  </Typography>
                  <Typography align="left">
                    A general overview of what hospice is, what it isn't,
                    its benefits, who receives it
                  </Typography>
                  <Box textAlign='center'>
                    <Button style={styles.button} > Click Here </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <CardContent>Hello</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

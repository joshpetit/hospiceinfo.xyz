import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors/";
import React from "react";
import { Component } from "react";
import Image from 'material-ui-image'

export default class HospiceInfo extends Component {
  render() {
    return (
      <Container
        style={{
          marginTop: "5em",
          marginBottom: "3em",
        }}
        maxWidth="xl"
      >
        <Typography color="primary" variant="h2">
          What is Hospice?
        </Typography>
        <Container
          style={{
            marginTop: "3em",
            marginBottom: "2em",
          }}
          maxWidth="lg"
        >
          <Box padding={5} boxShadow={5} bgcolor={red[100]}>
            <Typography variant="h4">General</Typography>
              <Grid container justify='center' spacing={2} direction="row">

                <Grid item xs={8}>
                  <Typography variant="body1">Text adnd what not</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Image color={red[100]} src="placeholders/500x500.jpg"/>
                </Grid>

            </Grid>
          </Box>
        </Container>
      </Container>
    );
  }
}

import React from "react";
import { Component } from "react";
import {
  Link,
  Hidden,
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors/";
import Image from 'material-ui-image'

let cards = [
  {
    title: "What is Hospice?",
    text:
      "A general overview of what hospice is, what it isn't, its benefits, and who can receive it",
    link: "#hospice-info",
    imageURL: "images/logo.png"
  },
  {
    title: "Meet The Team",
    text:
      "Meet the members of a typical hospice team and see their roles",
    link: "#meet-team",
    imageURL: "images/people.png"
  },
];

const styles = {
  card: {
    background: grey[100],
    margin: "10px",
  },
  button: {
    background: red[400],
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
};

export default class Overview extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Box marginTop={15} style={styles.container}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {cards.map((x, key) => (
              <Grid item xs={12} lg={4}>
                <Card raised={true} style={styles.card}>
                  <CardContent style={{ color: "black" }}>
                    <Typography align="center" variant="h4">
                      {x.title}
                    </Typography>
                    <Typography paragraph={true} variant="body1" align="center">
                      {x.text}
                    </Typography>
                    <Box textAlign="center">
                      <Grid container justify="center">
                        <Hidden smDown>
                          <Link href={x.link}>
                            <Grid item xs={12}>
                              <img height={250} src={x.imageURL} />
                            </Grid>
                          </Link>
                        </Hidden>
                        <Grid item xs={12}>
                          <Button href={x.link} style={styles.button}>
                            Click Here
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    );
  }
}

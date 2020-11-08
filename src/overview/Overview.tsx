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
import { grey, red } from "@material-ui/core/colors/";

let cards = [
  {
    title: "What is Hospice?",
    text:
      "A general overview of what hospice is, what it isn't, its benefits, and who can receive it",
  },
  {
    title: "Meet The Team",
    text:
      "Meet the members of a typical hospice team and see their role in helping you",
  },
];

const styles = {
  card: {
    background: grey[100],
    margin: "10px",
    height: '20vw'
  },
  button: {
    background: red[400],
  },
  container: {
    display: "flex",
    justifyContent: "center",
    height: "500px",
  },
};

export default class Overview extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Box marginTop={15} boxShadow={5} style={styles.container}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {cards.map((x, key) => (
              <CardTem key={key} title={x.title} text={x.text} />
            ))}
          </Grid>
        </Box>
      </Container>
    );
  }
}

interface CardItems {
  title: string;
  text: string;
}

class CardTem extends Component<CardItems> {
  render() {
    return (
      <Grid item xs={4}>
        <Card raised={true} style={styles.card}>
          <CardContent style={{ color: "black" }}>
            <Typography align="center" variant="h4">
              {this.props.title}
            </Typography>
            <Typography paragraph={true} variant="body1" align="center">
              {this.props.text}
            </Typography>
            <Box textAlign="center">
              <Button style={styles.button}>Click Here</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

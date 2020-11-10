import React from "react";
import { Component } from "react";
import { Hidden, Grid, Box, Container, Typography } from "@material-ui/core";
import Image from "material-ui-image";

interface Person {
  imageURL: string;
  shortText: string;
  longText: string;
}

const people = [
  {
    url: "placeholders/500x500.jpg"
  },
  {
    url: "placeholders/500x500.jpg"
  },
  {
    url: "placeholders/500x500.jpg"
  },
  {
    url: "placeholders/500x500.jpg"
  },
  {
    url: "placeholders/500x500.jpg"
  },
  {
    url: "placeholders/500x500.jpg"
  },
  {
    url: "placeholders/500x500.jpg"
  },
  {
    url: "placeholders/500x500.jpg"
  },
]

interface HIProps {
  person: Person;
}

class HoverableImage extends Component<HIProps> {
  render() {
    return (
      <Grid item xs={1} >
        <Image src={this.props.person.imageURL} />
      </Grid>
    )
  }
}

export default class Team extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Typography color="primary" variant="h2" align="center">
          Meet The Team
        </Typography>
        <Hidden  mdDown>
          <Grid container justify="center" spacing={1} direction="row">
            {people.map( (x) => 
            <Grid item xs={1}>
              <Image src={x.url} />
            </Grid>
            )}
          </Grid>
        </Hidden>

      </Container>
    );
  }
}

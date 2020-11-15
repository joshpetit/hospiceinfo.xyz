import React from "react";
import { Component } from "react";
import { Hidden, Grid, Box, Container, Typography } from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import Image from "material-ui-image";


interface Person {
  name: string;
  imageURL: string;
  shortText: string;
  longText: string;
}

const persons: Person[] = [
  {
    name: "First Last",
    imageURL: "placeholders/person.png",
    shortText: "text placeholder string string string",
    longText:
      "text placeholder text placeholder text placeholder text placeholder text placeholder",
  },
  {
    name: "2 First Last",
    imageURL: "placeholders/person.png",
    shortText: "2 text placeholder string string string",
    longText:
      "2 text placeholder text placeholder text placeholder text placeholder text placeholder",
  },
  {
    name: "3 First Last",
    imageURL: "placeholders/person.png",
    shortText: "3 text placeholder string string string",
    longText:
      "3 text placeholder text placeholder text placeholder text placeholder text placeholder",
  },
];

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
        <Hidden mdDown>
          <Grid container justify="center" spacing={10} direction="row">
            {persons.map((x) => (
              <Grid 
                item>
                <img src={x.imageURL} />
              </Grid>
            ))}
          </Grid>
        </Hidden>

        <Container maxWidth="lg">
          <Grid style={{marginTop: '2em'}}container justify="center">
            {persons.map((person) => (
              // nthchild(odd) column-reverse
              <Grid justify="center" style={{marginTop: '1em'}} container spacing={1} direction="row">
                <Grid item xs={12} sm={5} md={3} spacing={1}>
                  <Box padding={.5} m={2} boxShadow={5} bgcolor={red[200]}>
                    <Image color='transparent' src={person.imageURL + ".pt"} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8} spacing={1}>
                  <Box padding={2} m={2} boxShadow={8} height="75%">
                    <p>{person.name}</p>
                    <p>{person.longText}</p>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    );
  }
}

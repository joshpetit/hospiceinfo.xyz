import React, { useState } from "react";
import { Component } from "react";
import { Tooltip, Hidden, Grid, Box, Container, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Image from "material-ui-image";
import "./Team.css";

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
  {
    name: "4 First Last",
    imageURL: "placeholders/person.png",
    shortText: "4 text placeholder string string string",
    longText:
      "4 text placeholder text placeholder text placeholder text placeholder text placeholder",
  },
];

interface State {
  person: Person;
}

export default class Team extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      person: persons[0],
    };
  }
  setHighlight = (person: Person) => {
    this.setState({
      person: person,
    });
  };

  render() {
    return (
      <Container maxWidth="xl">
        <Typography color="primary" variant="h2" align="center">
          Meet The Team
        </Typography>
        <Hidden smDown>
          <Grid container justify="center" spacing={10} direction="row">
            {persons.map((person, key) => (
              <Grid
                key={key}
                onMouseEnter={() => this.setHighlight(person)}
                item
              >
                <Tooltip placement="top" title={person.name}>
                <img alt={person.name} src={person.imageURL} />
              </Tooltip>
              </Grid>
            ))}
          </Grid>
          <Container maxWidth="lg">
          <Grid justify="center" item >
            <Box padding={2} m={2} boxShadow={5}>
              <Typography variant='h4' color='primary' align="center">{this.state.person.name}</Typography>
              <Typography align="center">{this.state.person.shortText}</Typography>
            </Box>
          </Grid>
          </Container>
        </Hidden>

        <Container maxWidth="lg">
          <Grid style={{ marginTop: "2em" }} container justify="center">
            {persons.map((person) => (
              <Box
                className="person-container"
                padding={2}
                m={2}
                boxShadow={8}
                height="auto"
                width="100%"
              >
                <Grid justify="center" item xs={12} sm={5} md={3} spacing={1}>
                  <Box padding={0.5} m={2} boxShadow={5} bgcolor={red[200]}>
                    <Image
                      alt={person.name}
                      color="transparent"
                      src={person.imageURL + ".pt"}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Box padding={2} m={2} boxShadow={0} height="75%">
                    <p>{person.name}</p>
                    <p>{person.longText}</p>
                  </Box>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Container>
      </Container>
    );
  }
}

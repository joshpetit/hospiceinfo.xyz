import React, {useState} from "react";
import { Component } from "react";
import { Hidden, Grid, Box, Container, Typography } from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import Image from "material-ui-image";
import './Team.css';


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
let order:string = "row-reverse";
export default class Team extends Component {
  // const [order:string, setOrder:string] = useState("row-reverse");
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
              <Box className="person-container" padding={2} m={2} boxShadow={8} height="auto" width="100%">
                <Grid item xs={12} sm={5} md={3} spacing={1}>
                  <Box padding={.5} m={2} boxShadow={0} bgcolor={red[200]}>
                    <Image color='transparent' src={person.imageURL + ".pt"} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={9} spacing={1}>
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

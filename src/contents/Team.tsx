import React from "react";
import { Component } from "react";
import { Hidden, Grid, Box, Container, Typography } from "@material-ui/core";
import Image from "material-ui-image";

interface Person {
  imageURL: string;
  shortText: string;
  longText: string;
}

//----------------------------------------------------------------------------------------------------
// You can have an array of objects of the people's data. 
// In both the 1st part(just photos) 
// and the 2nd part (the alternating image and text)
// you can map for just the image (1st part)
// and map for the other data (2nd part)
const persons = [
  {
    name: "First Last",
    image: "",
    shortText: "text placeholder string string string",
    longText: "text placeholder text placeholder text placeholder text placeholder text placeholder",
  },
  {
    name: "2 First Last",
    image: "",
    shortText: "2 text placeholder string string string",
    longText: "2 text placeholder text placeholder text placeholder text placeholder text placeholder",
  }
]
//----------------------------------------------------------------------------------------------------

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

        <div className="people-cards-container" style={{backgroundColor:"red"}}>
          TEST
          {persons.map((person) => {
            // nthchild(odd) column-reverse
            <Grid container justify="center" spacing={1} direction="column">
              <Grid item xs={1} spacing={1}>
               <img src={person.image}/> 
              </Grid>
              <Grid item xs={1} spacing={1}>
                <p>{person.name}</p>
                <p>{person.longText}</p>
              </Grid>
            </Grid>
          })
          }
        </div>

      </Container>
    );
  }
}
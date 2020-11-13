import React from "react";
import { Component } from "react";
import { Hidden, Grid, Box, Container, Typography } from "@material-ui/core";
import Image from "material-ui-image";

interface Person {
  name: string;
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
const persons: Person[] = [
  {
    name: "First Last",
    imageURL: "placeholders/500x500.jpg",
    shortText: "text placeholder string string string",
    longText: "text placeholder text placeholder text placeholder text placeholder text placeholder",
  },
  {
    name: "2 First Last",
    imageURL: "placeholders/500x500.jpg",
    shortText: "2 text placeholder string string string",
    longText: "2 text placeholder text placeholder text placeholder text placeholder text placeholder",
  },
  {
    name: "3 First Last",
    imageURL: "placeholders/500x500.jpg",
    shortText: "3 text placeholder string string string",
    longText: "3 text placeholder text placeholder text placeholder text placeholder text placeholder",
  }
]
//----------------------------------------------------------------------------------------------------


export default class Team extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Typography color="primary" variant="h2" align="center">
          Meet The Team
        </Typography>
        <Hidden  mdDown>
          <Grid container justify="center" spacing={1} direction="row">
            {persons.map( (x) => 
            <Grid item xs={1}>
              <Image src={x.imageURL} />
            </Grid>
            )}
          </Grid>
        </Hidden>

        <Container maxWidth="lg">
        <Grid container justify="center" >
          {persons.map((person) => 
            // nthchild(odd) column-reverse
            <Grid container spacing={1} direction="row">
              <Grid item xs={12} md={3} spacing={1}>
               <Image src={person.imageURL}/> 
              </Grid>
              <Grid item xs={12} md={8} spacing={1}>
                <p>{person.name}</p>
                <p>{person.longText}</p>
              </Grid>
            </Grid>
          )
          }
        </Grid>
        </Container>  

      </Container>
    );
  }
}

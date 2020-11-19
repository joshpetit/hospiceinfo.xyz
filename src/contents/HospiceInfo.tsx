import { Box, Container, Grid, Typography } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors/";
import React from "react";
import { Component } from "react";
import Image from "material-ui-image";
import sections from "./hospiceinfo.json";

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
        <Typography
          id="hospice-info"
          color="primary"
          align="center"
          variant="h2"
        >
          What is Hospice?
        </Typography>
        {sections.map((x, key) => (
          <InfoSection
            key={key}
            index={key}
            title={x.title}
            text={x.text}
            imageURL={x.imageURL}
          />
        ))}
      </Container>
    );
  }
}

interface Info {
  index: number;
  title: string;
  text: string;
  imageURL: string;
}

class InfoSection extends Component<Info> {
  render() {
    return (
      <Container
        style={{
          marginTop: "3em",
          marginBottom: "2em",
        }}
        maxWidth="lg"
      >
        <Box
          padding={5}
          boxShadow={5}
          bgcolor={this.props.index % 2 === 1 ? red[100] : grey[100]}
        >
          <Typography variant="h4">{this.props.title}</Typography>
          <Grid container justify="center" direction="row">
            <Grid item xs={12} lg={8}>
              <Typography
                dangerouslySetInnerHTML={{ __html: this.props.text }}
                variant="body1"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <Image color={"transparent"} src={this.props.imageURL} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

import React from "react";
import {
  Link,
  makeStyles,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start">
        </IconButton>
        <Button
          color="secondary"
          variant="contained"
          style={{
            fontSize: "1rem",
          }}
        >
          <Link href='#hospice-info'>Info</Link>
        </Button>
        <Typography className={classes.title} align="center" variant="h5">
          HospiceInfo.xyz
        </Typography>

        <Button
          color="secondary"
          variant="contained"
          style={{
            fontSize: "1rem",
          }}
        >
          <Link href='#meet-team'>Team</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

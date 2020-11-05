import React from "react";
import {
  makeStyles,
  Button,
  Icon,
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
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start">
          <Icon>menu</Icon>
        </IconButton>
        <Typography className={classes.title}variant="h5">Hospice.xyz</Typography>

        <Button> About </Button>
      </Toolbar>
    </AppBar>
  );
}
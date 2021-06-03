import React, { useState } from 'react';
import {
  Button,
  Grid,
  Paper,
  Avatar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import snake from "../../assets/Snake.png";
import xp from "../../assets/Vector.png";
import golang from "../../assets/go.png";
import cpp from "../../assets/cpp.png";
import python from "../../assets/python.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    // maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  control: {
    padding: theme.spacing(2)
  },
  pos: {
    marginBottom: 12
  },
  options: {},
  option: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'light-gray',
    border: 'none',
    cursor: 'pointer',
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'gray'
    },
    '&:focus': {
      backgroundColor: 'gray'
    },
    '&:disabled': {
      backgroundColor: '#efefef',
      color: 'black'
    },
    '&:disabled:hover': {
      backgroundColor: '#efefef',
    }
    },
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
    },
  }
));

export default function ProfileBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
              <Avatar 
              className={classes.large} 
              style={{border: '0.1px solid black'}} 
              src={snake} />
              <br/>
              <Button variant="contained" color="primary">
                Edit Profile
              </Button>
          </Grid>
          <Grid item xs={12} sm container alignItems='center'>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1">
                  <b>Snake</b>
                </Typography>
                <Typography variant="subtitle1">
                  snake_crossing
                </Typography>
                <Typography variant="subtitle1">
                  Joined Jan 1971
                </Typography>
                <Typography variant="subtitle1">
                  <img src={xp} alt="ex pe" width="15" height="15"/> 35 XP
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>
                <img src={python} alt="python" width="40" height="40"/> <br/>
                <img src={cpp} alt="see plus plus" width="40" height="40"/> <br/>
                <img src={golang} alt="go lang" width="40" height="40"/> <br/>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
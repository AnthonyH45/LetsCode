import React, { useState } from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    // width: '100%'

  },
  smallpaper: {
    padding: theme.spacing(2),
    margin: '10px',
    maxWidth: 250,
    width: 250
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
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
      backgroundColor: '#efefef'
    }
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17)
  }
}));

export default function ProfileStats() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
          <b>Statistics</b>
        <Grid container align="center" justify="center">
          <Grid container xs={12} >
            <Grid item xs={6}>
              <Paper className={classes.smallpaper}>
                <Grid item align="center" justify="center">
                  <b>Total Lessons Completed</b>
                  <br />
                  <SchoolOutlinedIcon />
                  <p>35</p>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.smallpaper}>
                <Grid item align="center" justify="center">
                  <b>Total Problems Solved</b>
                  <p>400</p>
                  <EmojiObjectsOutlinedIcon />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={6}>
              <Paper className={classes.smallpaper}>
                <Grid item align="center" justify="center">
                  <b>Current Streak</b>
                  <p>17885 Days</p>
                  <WhatshotIcon />
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.smallpaper}>
                <Grid item align="center" justify="center">
                  <b>Fastest Typing Speed</b>
                  <p>50 cpm</p>
                  <FlashOnIcon />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import activity from "../../assets/activity.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
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
  correctOption: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(77,194,116,0.8)',
    border: 'none',
    cursor: 'pointer',
    '&:disabled': {
      backgroundColor: 'rgba(77,194,116,0.8)'
    },
    '&:disabled:hover': {
      backgroundColor: 'rgba(77,194,116,0.8)'
    },
  },
  submit: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    '&:disabled': {
      backgroundColor: 'rgba(77,194,116)'
    },
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&:focus': {
      backgroundColor: 'transparent'
    }
   
  },
  correct: {
    zIndex: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    top: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(77,194,116)',
    color: 'white'
  },
  nextQuestion: {
    marginTop: 30,
    float: 'right',
    display: 'flex',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    color: 'black',
    backgroundColor: 'rgba(77,194,116,0.8)',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'rgba(77,194,116)',
      fontStyle: 'italic',
    },
  }
}));


export default function ProfileActivity() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>Activity</b>
            <img src={activity} width='100%' height='100%'/>
          </Paper>
          
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

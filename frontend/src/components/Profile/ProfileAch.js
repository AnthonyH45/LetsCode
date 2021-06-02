import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Description from '../Description/Description.js';
import Highlight from 'react-highlight'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 375,
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

export default function ProfileAch() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <b>Achievements</b>
        <Grid container spacing={2}>
            <List className={classes.root}>
              <ListItem divider='true'>
                <CheckIcon />
                <ListItemText 
                  primary="Completed your first lesson!" 
                  style={{position: 'relative', left: '20px'}}/> 
              </ListItem>
              <ListItem divider='true'>
                <CheckIcon/>
                <ListItemText 
                  primary="Reached over 50 cpm on Coderacer" 
                  style={{position: 'relative', left: '20px'}}/>
                  <WhatshotIcon/>
              </ListItem>
              <ListItem divider='true'>
                <CheckIcon/>
                <ListItemText 
                  primary="Raced against other players in Coderacer" 
                  style={{position: 'relative', left: '20px'}}/>
              </ListItem>
              <ListItem divider='true'>
                <CheckIcon/>
                <ListItemText 
                  primary="Completed the Python course" 
                  style={{position: 'relative', left: '20px'}}/>
              </ListItem>
              <ListItem divider='true'>
                <CheckBoxOutlineBlankIcon/>
                <ListItemText 
                  primary="Completed the C++ course" 
                  style={{position: 'relative', left: '20px'}}/>
              </ListItem>
              <ListItem divider='true'>
                <CheckBoxOutlineBlankIcon/>
                <ListItemText 
                  primary="Added 5 friends" 
                  style={{position: 'relative', left: '20px'}}/>
              </ListItem>
            </List>
        </Grid>
      </Paper>
    </div>
  );
}

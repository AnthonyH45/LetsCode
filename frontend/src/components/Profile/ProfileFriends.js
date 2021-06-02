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
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Description from '../Description/Description.js';
import Highlight from 'react-highlight'

import friend1 from "../../assets/pic1.png";
import friend2 from "../../assets/pic2.png";
import friend3 from "../../assets/pic3.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
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
    small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  }
));

export default function ProfileFriends() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <b>Friends</b>
        <Grid container spacing={2}>
            <List className={classes.root}>
              <ListItem divider='true'>
                <ListItemAvatar>
                  <Avatar 
                    className={classes.small} 
                    style={{border: '0.1px solid black'}} 
                    src={friend1} />
                </ListItemAvatar>
                <ListItemText primary="Johnny" secondary="Lvl 100"/> 
                <p style={{color:"green"}}>online</p>
              </ListItem>
              <ListItem divider='true'>
                <ListItemAvatar>
                  <Avatar 
                    className={classes.small} 
                    style={{border: '0.1px solid black'}} 
                    src={friend2} />
                </ListItemAvatar>
                <ListItemText primary="tin_can" secondary="Lvl 3" />
                <p style={{color:"green"}}>online</p>
              </ListItem>
              <ListItem divider='true'>
                <ListItemAvatar>
                  <Avatar 
                    className={classes.small} 
                    style={{border: '0.1px solid black'}} 
                    src={friend3} />
                </ListItemAvatar>
                <ListItemText primary="tomehomme" secondary="Lvl 1000" />
                <p style={{color:"#B12A0C"}}>offline</p>
              </ListItem>
            </List>
        </Grid>
      </Paper>
    </div>
  );
}

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import friend1 from '../../assets/pic1.png';
import friend2 from '../../assets/pic2.png';
import friend3 from '../../assets/pic3.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
    // margin: 'auto',
    // maxWidth: 500,
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  }
}));

export default function ProfileFriends() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <b>Friends</b>
        <Box>
          <List>
            <ListItem divider="true">
              <ListItemAvatar>
                <Avatar
                  className={classes.small}
                  style={{ border: '0.1px solid black' }}
                  src={friend1}
                />
              </ListItemAvatar>
              <ListItemText primary="Johnny" secondary="Lvl 100" />
              <p style={{ color: 'green' }}>online</p>
            </ListItem>
            <ListItem divider="true">
              <ListItemAvatar>
                <Avatar
                  className={classes.small}
                  style={{ border: '0.1px solid black' }}
                  src={friend2}
                />
              </ListItemAvatar>
              <ListItemText primary="tin_can" secondary="Lvl 3" />
              <p style={{ color: 'green' }}>online</p>
            </ListItem>
            <ListItem divider="true">
              <ListItemAvatar>
                <Avatar
                  className={classes.small}
                  style={{ border: '0.1px solid black' }}
                  src={friend3}
                />
              </ListItemAvatar>
              <ListItemText primary="tomehomme" secondary="Lvl 1000" />
              <p style={{ color: '#B12A0C' }}>offline</p>
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Box>
  );
}

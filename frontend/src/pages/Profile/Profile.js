import React from 'react';
import { Box, Container, Paper, Grid } from '@material-ui/core';

import ProfileBadge from '../../components/Profile/ProfileBadge.js';
import ProfileFriends from '../../components/Profile/ProfileFriends.js';
import ProfileActivity from '../../components/Profile/ProfileActivity.js';
import ProfileAch from '../../components/Profile/ProfileAch.js';
import ProfileStats from '../../components/Profile/ProfileStats.js';

import Copyright from '../../components/Copyright/Copyright.js';
import Navbar from '../../components/Navbar/Navbar.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    marginBottom: 40,
    marginTop: 75
  }
}));
export default function Profile() {
  const classes = useStyles();
  return (
    <Box>
      <Navbar />
      <Container>
        <Grid container md={12} className={classes.root}>
          <Grid container md={12} spacing={4} alignItems="center">
            <Grid item md={8}>
              <ProfileBadge />
            </Grid>
            <Grid item md={4}>
              <ProfileFriends />
            </Grid>
          </Grid>
          <Grid container md={12} spacing={4} alignItems="center">
            <Grid item md={8}>
              <Box marginBottom={4}>
                <ProfileActivity />
              </Box>
              <ProfileStats />
            </Grid>
            <Grid item md={4}>
              <ProfileAch />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </Box>
  );
}

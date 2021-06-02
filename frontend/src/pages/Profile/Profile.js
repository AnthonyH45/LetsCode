import React from 'react';
import { Box, Container, Paper, Grid } from '@material-ui/core';

import ProfileBadge from '../../components/Profile/ProfileBadge.js';
import ProfileFriends from '../../components/Profile/ProfileFriends.js';
import ProfileActivity from '../../components/Profile/ProfileActivity.js';
import ProfileAch from '../../components/Profile/ProfileAch.js';
import ProfileStats from '../../components/Profile/ProfileStats.js';

import Copyright from '../../components/Copyright/Copyright.js';
import Navbar from '../../components/Navbar/Navbar.js';


export default function Profile() {
    return (
        <Box id="Profile">
            <Navbar/>
                <Box marginBottom="25px" marginTop="75px">
                    <ProfileBadge/> <br/>
                    <ProfileFriends/> <br/>
                    <ProfileActivity/> <br/>
                    <ProfileAch/> <br/>
                    <ProfileStats/> <br/>
                </Box>
            <Copyright/>
        </Box>
    );
}
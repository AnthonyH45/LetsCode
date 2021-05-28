import React from 'react';
import { Box } from '@material-ui/core';

import FillIn from '../../../components/FillIn/FillIn.js';
import Copyright from '../../../components/Copyright/Copyright.js';
import Navbar from '../../../components/Navbar/Navbar.js';

export default function GuessProb() {
    return (
        <Box id="FillIn">
            <Navbar/>

            <Box marginBottom="25px" marginTop="75px">
                <FillIn/>
            </Box>

            <Copyright/>
        </Box>
    );
}


import React from 'react';
import { Box } from '@material-ui/core';

import GuessOutput from '../../../components/GuessOutput/GuessOutput.js';
import Copyright from '../../../components/Copyright/Copyright.js';
import Navbar from '../../../components/Navbar/Navbar.js';

export default function GuessProb() {
    return (
        <Box id="GuessProb">
            <Navbar/>

            <Box marginBottom="25px" marginTop="75px">
                <GuessOutput/>
            </Box>

            <Copyright/>
        </Box>
    );
}


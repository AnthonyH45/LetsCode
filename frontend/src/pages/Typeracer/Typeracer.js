import React from 'react';
import { Box } from '@material-ui/core';

import TypeRacer from '../../components/TypeRacer/TypeRacer.js';
import Copyright from '../../components/Copyright/Copyright.js';
import Navbar from '../../components/Navbar/Navbar.js';

export default function Typeracer() {
	return (
		<Box id='typeracer'>
			<Navbar />

			<Box marginBottom='25px' marginTop='75px'>
				<TypeRacer />
			</Box>

			<Copyright />
		</Box>
	);
}

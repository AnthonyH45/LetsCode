import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/Navbar.js';
import LessonC from './LessonC';
import LessonNavC from './LessonNavC.js';
import AllLessonsC from './AllLessonsC.js';
const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
	lesson: {
		margin: '100px 75px 0px 20px',
	},
	bottomBar: {
		width: '100%',
		overflow: 'hidden',
		position: 'fixed',
		bottom: 0,
	},
}));

const LessonsC = () => {
	const [currLessonIndex, setCurrLessonIndex] = useState(0);
	const classes = useStyles();

	const nextLesson = () => {
		console.log('next!');

		setCurrLessonIndex(currLessonIndex + 1);
	};
	const prevLesson = () => {
		console.log('prev!');
		// currLessonIndex -= 1;
		setCurrLessonIndex(currLessonIndex - 1);
	};
	return (
		<Box className={classes.root}>
			<Navbar />
			<Box className={classes.lesson}>
				<LessonC lesson={AllLessonsC[currLessonIndex]} />
			</Box>
			<div className={classes.bottomBar}>
				<LessonNavC
					nextLesson={nextLesson}
					prevLesson={prevLesson}
					index={currLessonIndex}
					numLessons={AllLessonsC.length}
				/>
			</div>
		</Box>
	);
};

export default LessonsC ;

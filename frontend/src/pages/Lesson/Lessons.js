import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/Navbar.js';
import Lesson from './Lesson';
import LessonNav from './LessonNav.js';
import AllLessons from './AllLessons.js';
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

const Lessons = () => {
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
				<Lesson lesson={AllLessons[currLessonIndex]} />
			</Box>
			<div className={classes.bottomBar}>
				<LessonNav
					nextLesson={nextLesson}
					prevLesson={prevLesson}
					index={currLessonIndex}
					numLessons={AllLessons.length}
				/>
			</div>
		</Box>
	);
};

export default Lessons;

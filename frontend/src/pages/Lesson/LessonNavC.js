import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#f9f9f9',
		alignItems: 'center',
		padding: '5px 20px',
		bottom: '0',
	},
	chapter: {
		textTransform: 'uppercase',
		fontStyle: 'italic',
		fontWeight: 'bold',
	},
	button: {
		height: '100%',
	},
}));
const LessonNavC = (props) => {
	const { nextLesson, prevLesson, index, numLessons } = props;
	console.log(index, numLessons);
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Button
				className={classes.button}
				size='small'
				variant='contained'
				color='primary'
				style={{ visibility: index > 0 ? 'visible' : 'hidden' }}
				onClick={() => prevLesson()}
			>
				Back
			</Button>
			<p className={classes.chapter}>INTRODUCTION</p>
			<Button
				className={classes.button}
				size='small'
				variant='contained'
				color='primary'
				style={{ visibility: index < numLessons - 1 ? 'visible' : 'hidden' }}
				onClick={() => nextLesson()}
			>
				Next
			</Button>
		</Box>
	);
};

export default LessonNavC;

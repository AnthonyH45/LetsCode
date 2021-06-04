import React, { useState, useRef, useDebugValue } from 'react';
import { Button, Container, Grid, Paper, TextField } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Description from '../Description/Description.js';
import Highlight from 'react-highlight';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 500,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		whiteSpace: 'pre-wrap',
	},
	control: {
		padding: theme.spacing(2),
	},
	pos: {
		marginBottom: 12,
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
			backgroundColor: 'gray',
		},
		'&:focus': {
			backgroundColor: 'gray',
		},
		'&:disabled': {
			backgroundColor: '#efefef',
			color: 'black',
		},
		'&:disabled:hover': {
			backgroundColor: '#efefef',
		},
	},
	correctOption: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundColor: 'rgba(77,194,116,0.8)',
		border: 'none',
		cursor: 'pointer',
		'&:disabled': {
			backgroundColor: 'rgba(77,194,116,0.8)',
		},
		'&:disabled:hover': {
			backgroundColor: 'rgba(77,194,116,0.8)',
		},
	},
	submit: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		'&:disabled': {
			backgroundColor: 'rgba(77,194,116)',
		},
		'&:hover': {
			backgroundColor: 'transparent',
		},
		'&:focus': {
			backgroundColor: 'transparent',
		},
	},
	correct: {
		zIndex: 10,
		position: 'absolute',
		width: '100%',
		height: '100%',
		textAlign: 'center',
		display: 'flex',
		top: 0,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(77,194,116)',
		color: 'white',
	},
	nextQuestion: {
		marginTop: 30,
		float: 'right',
		display: 'flex',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
		color: 'black',
		backgroundColor: 'rgba(77,194,116,0.8)',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: 'rgba(77,194,116)',
			fontStyle: 'italic',
		},
	},
}));

export default function GuessOutput() {
	const [userAnswer, setUserAnswer] = useState(null);
	const [isUserCorrect, setIsUserCorrect] = useState(null);
	const [nextQuestion, setNextQuestion] = useState(null);
	const [level, setLevel] = useState(0);
	const valRef = useRef('');

	const Prob = {
		category: 'INTRODUCTION',
		title: 'Arithmetic',
		desc: 'Fill in the following code to enhance your code reading and debugging skillz',
		lessonLink: '/lessons',
		questions: [
			`
def compute_sum(list_to_sum):
    sum = 0
    for i in list_to_sum:
        sum ___ i
    return sum

compute_sum( [1,2,3] )
        `,
			`
def print_num_list(num):
  print( [ ___ for i in range(0,num) ] )

print_num_list(3) # prints [1,2,3]
        `,
			`
def print_square(num):
    print(num ___ ____)

print_square(3) # prints 9
        `,
		],
		blanks: ['sum ___ i', '[ ___ for i in', 'print(num ___ ____)'],
		answers: ['+=', 'i', '**num'],
	};
	const correct = () => {
		new Audio(
			'https://freesound.org/data/previews/99/99636_1163166-lq.mp3'
		).play();
	};
	const wrong = () => {
		new Audio(
			'https://freesound.org/data/previews/140/140867_649468-lq.mp3'
		).play();
	};

	const selectAnswer = (option) => {
		console.log('option:', option);
		setUserAnswer(option);
	};

	const checkCorrect = (userAnswer) => {
		console.log('useranswer:', userAnswer);
		// setIsUserCorrect(userAnswer === Prob.answers[level]);
		if (userAnswer === Prob.answers[level]) {
			correct();
			return true;
		}
		wrong();
		return false;
	};

	const nextLevel = () => {
		setLevel(level + 1);
		setIsUserCorrect(false);
		setUserAnswer(false);
		setNextQuestion(false);
	};

	const handleChange = (e) => {
		return console.log(e.target.value);
	};

	const sendVal = () => {
		console.log('submit');
	};

	const classes = useStyles();

	return level === 3 ? (
		<h1>Thats all the questions for now! Come back later!</h1>
	) : (
		<>
			<Fade
				in={isUserCorrect}
				timeout={{ enter: 800, exit: 1200 }}
				onEntered={() => setIsUserCorrect(false)}
				onExit={() => setNextQuestion(true)}
			>
				<div className={classes.correct}>
					<h1>Correct!</h1>
					<h2>Head onto the next question.</h2>
				</div>
			</Fade>

			<Container id='GuessOutput'>
				<Description
					category={Prob.category}
					title={Prob.title}
					desc={Prob.desc}
					lessonLink={Prob.lessonLink}
				/>

				<Grid container className={classes.root} spacing={3}>
					<Grid item xs={12}>
						<Grid container justify='center' spacing={3}>
							<Grid xs={6} key={0} item>
								<Paper className={classes.paper}>
									<Highlight innerHTML={true}>
										{
											'<p>Fill in the correct code where the underscores are</p>'
										}
									</Highlight>
									<Highlight language='python'>
										{Prob.questions[level]}
									</Highlight>
								</Paper>
							</Grid>
							<Grid xs={6} key={1} item>
								<Paper className={`${classes.paper}`}>
									<TextField
										id='user-fillin'
										label={Prob.blanks[level]}
										variant='outlined'
										onChange={handleChange}
									/>
									<Button onClick={sendVal()} disabled={nextQuestion}>
										<span className={`${classes.option} ${classes.submit}`}>
											Submit
										</span>
									</Button>
								</Paper>

								<Button
									className={classes.nextQuestion}
									style={{ display: nextQuestion ? 'block' : 'none' }}
									onClick={() => nextLevel()}
								>
									{' '}
									Head onto the next question &gt;{' '}
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

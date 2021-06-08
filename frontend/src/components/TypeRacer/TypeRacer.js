import React, { useEffect, useState } from 'react';
import { TextField, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
	good: { color: 'green' },
	bad: { color: 'red' },
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
}));

export default function Typeracer() {
	const Prob = {
		code: `[[j%i for j in range(0,100)] for i in range(0,100)]`,
	};

	const classes = useStyles();
	const [startTypeRacer, setStartTypeRacer] = useState(false);
	const [finishTypeRacer, setFinishTypeRacer] = useState(false);
	const [currentText, setCurrentText] = useState('');
	const [goodOrBad, setGoodOrBad] = useState(true);
	const [timer, setTimer] = useState(0);

	const checkCorrect = () => {
		const cur = currentText.trim();
		const probc = Prob.code.slice(0, cur.length).trim();

		if (cur === probc) {
			setGoodOrBad(true);
		} else {
			setGoodOrBad(false);
		}

		if (probc.length === Prob.code.trim().length) {
			setFinishTypeRacer(true);
		}
	};

	useEffect(() => {
		checkCorrect();
	});

	useEffect(() => {
		const interval = setInterval(() => {
			if (startTypeRacer) {
				setTimer((timer) => timer + 1);
			}
		}, 1000);

		if (finishTypeRacer) {
			setFinishTypeRacer(false);
			return () => clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [startTypeRacer, finishTypeRacer]);

	return (
		<Grid container className={classes.root} spacing={3}>
			<Grid item xs={12}>
				<Grid container justify='center'>
					<h1>SECONDS: {timer} </h1>
				</Grid>

				{/* <Grid container justify='center'>
					{finishTypeRacer ? <h2>DONE!</h2> : <></>}
				</Grid> */}

				<Grid container justify='center' spacing={3}>
					<Grid xs={6} key={0} item>
						<Paper className={classes.paper}>
							<Highlight innerHTML={true}>
								{'<p>Type this to have the right and left match!</p>'}
							</Highlight>
							<Highlight language='python'>{Prob.code}</Highlight>
						</Paper>
					</Grid>

					<Grid xs={6} key={1} item>
						<Paper className={`${classes.paper}`}>
							<TextField
								multiline
								className={`${classes.paper}`}
								rows={20}
								width='300px'
								InputProps={{
									className: goodOrBad ? classes.good : classes.bad,
								}}
								onChange={(e) => {
									setCurrentText(e.target.value);
									setStartTypeRacer(true);
								}}
								placeholder='this should be replaced'
								variant='outlined'
							/>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

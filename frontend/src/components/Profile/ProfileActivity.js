import React from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import activity from '../../assets/activity.png';

const useStyles = makeStyles((theme) => ({
	root: {
		// flexGrow: 1
	},
	paper: {
		padding: 10,
	},
}));

export default function ProfileActivity() {
	const classes = useStyles();

	return (
		<Box>
			<Grid container>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<b className={classes.txt}>Activity</b>
						<img alt='activity' src={activity} width='100%' height='100%' />
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
}

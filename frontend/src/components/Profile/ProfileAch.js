import React from 'react';
import { Box, Paper, List, ListItem, ListItemText } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {},
	paper: {
		height: '100%',
		padding: theme.spacing(2),
	},
}));

export default function ProfileAch() {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Paper className={classes.paper}>
				<b>Achievements</b>
				<Box>
					<List>
						<ListItem divider='true'>
							<CheckIcon />
							<ListItemText
								primary='Completed your first lesson!'
								style={{ position: 'relative', left: '20px' }}
							/>
						</ListItem>
						<ListItem divider='true'>
							<CheckIcon />
							<ListItemText
								primary='Reached over 50 cpm on Coderacer'
								style={{ position: 'relative', left: '20px' }}
							/>
							<Box marginLeft={5}>
								<WhatshotIcon />
							</Box>
						</ListItem>
						<ListItem divider='true'>
							<CheckIcon />
							<ListItemText
								primary='Raced against other players in Coderacer'
								style={{ position: 'relative', left: '20px' }}
							/>
						</ListItem>
						<ListItem divider='true'>
							<CheckIcon />
							<ListItemText
								primary='Completed the Python course'
								style={{ position: 'relative', left: '20px' }}
							/>
						</ListItem>
						<ListItem divider='true'>
							<CheckBoxOutlineBlankIcon />
							<ListItemText
								primary='Completed the C++ course'
								style={{ position: 'relative', left: '20px' }}
							/>
						</ListItem>
						<ListItem divider='true'>
							<CheckBoxOutlineBlankIcon />
							<ListItemText
								primary='Added 5 friends'
								style={{ position: 'relative', left: '20px' }}
							/>
						</ListItem>
					</List>
				</Box>
			</Paper>
		</Box>
	);
}

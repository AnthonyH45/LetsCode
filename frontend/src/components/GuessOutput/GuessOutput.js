import React from 'react';
import { 
    // Card, CardActions, CardContent,
    // Box,
    // Button,
    // Divider,
    // Typography,
    Container,
    Grid,
    Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Description from '../Description/Description.js';

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
        whiteSpace:'pre-wrap'
    },
    control: {
      padding: theme.spacing(2),
    },
    pos: {
        marginBottom: 12,
    },
    options: {

    },
    option: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'light-gray',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'gray',
        },
        '&:focus': {
            backgroundColor: 'gray',
        }
    }
}));

export default function GuessOutput() {
    const Prob = {
        category: "INTRODUCTION",
        title: "For Loops",
        desc: "Now flex your skills by guessing the output of the following code!",
        lessonLink: "https://link.to.the.lesson.plan",
        question:`
            def printA(num):
                for i in range(0,num):
                    print('A')
                
                print('A' * num)
            
            print(A)
        `,
        options: [
            `A\nA\nA\n`,
            `AA\nA\nA\n`,
            `A\nA\nAAAA\n`,
        ],
        answer: 0, // index of options
    };

    const checkCorrect = (option) => {
        return Prob.answer === option
    };

    const classes = useStyles();

    return (
        <Container id="GuessOutput">
            {/* <Paper elevation={3}> */}
                <Description
                    category = {Prob.category}
                    title = {Prob.title}
                    desc = {Prob.desc}
                    lessonLink = {Prob.lessonLink}
                />
                
                {/* <Divider/> */}

                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            <Grid xs={6} key={0} item>
                                <Paper className={classes.paper}>
                                        {Prob.question}
                                </Paper>
                            </Grid>
                            <Grid xs={6} key={1} item>
                                <Paper className={`${classes.paper}`}>
                                        {Prob.options.map((option, i) => {
                                            return (<><button className={classes.option} onClick={(e) => checkCorrect(i)}>{option}</button><br/></>)
                                        })}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            
            {/* </Paper> */}
        </Container>
    );
}


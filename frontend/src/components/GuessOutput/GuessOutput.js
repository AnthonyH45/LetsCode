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
      height: 250,
      width: 250,
    },
    control: {
      padding: theme.spacing(2),
    },
    pos: {
        marginBottom: 12,
      },
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
            
            printA(3)
        `,
        question1: "def printA(num):",
        question2: "\t     for i in range(0,num):",
        question3: "print('A')",
        question4: "print('A' * num)",
        question5: "printA(3)",
        options: [
            "A\nA\nA",
            "B\nB\nB",
            "C\nC\nC",
        ],
        answer: 0, // index of options
    }

    const classes = useStyles();

    return (
        <Container id="GuessOutput">
            {/* <Paper elevation={3}> */}
                <Description/>
                
                {/* <Divider/> */}

                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            <Grid key={0} item>
                                <Paper className={classes.paper}>
                                    {/* <Typography> */}
                                        {Prob.question1}
                                        <br/>
                                        {Prob.question2}
                                    {/* </Typography> */}
                                </Paper>
                            </Grid>
                            <Grid key={1} item>
                                <Paper className={classes.paper}>
                                    {/* <Typography> */}
                                        {Prob.options}
                                    {/* </Typography> */}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            
            {/* </Paper> */}
        </Container>
    );
}


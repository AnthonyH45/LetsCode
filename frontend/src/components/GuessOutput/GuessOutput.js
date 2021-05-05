import React from 'react';
import { 
    Card, CardActions, CardContent,
    Box,
    Button,
    Typography,
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

/*
    Description has a category, like `INTRODUCTION`
    Has a title, like `For Loops`
    And ofc a description, 
    ```
    Now let's see if you were paying attention!
    What is the ouput of the following code?
    ```
*/
export default function GuessOutput() {
    const Prob = {
        category: "INTRODUCTION",
        title: "For Loops",
        desc: "Now flex your skills by guessing the output of the following code!",
        lessonLink: "https://link.to.the.lesson.plan",
        question: "a\n\
        b",
        //     def printA(num):
        //         for i in range(0,num):
        //             print('A')
                
        //         print('A' * num)
            
        //     printA(3)
        // `,
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
            <Paper elevation={3}>
                <Description/>
                <br/>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            <Grid key={0} item>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        {Prob.question}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key={1} item>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        {Prob.options}
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}


import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Paper
} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Description from '../Description/Description.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    whiteSpace: 'pre-wrap'
  },
  control: {
    padding: theme.spacing(2)
  },
  pos: {
    marginBottom: 12
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
    '&:hover': {
      backgroundColor: 'gray'
    },
    '&:focus': {
      backgroundColor: 'gray'
    },
    '&:disabled': {
      backgroundColor: '#efefef',
      color: 'black'
    },
    '&:disabled:hover': {
      backgroundColor: '#efefef',
    }
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
      backgroundColor: 'rgba(77,194,116,0.8)'
    },
    '&:disabled:hover': {
      backgroundColor: 'rgba(77,194,116,0.8)'
    },
  },
  submit: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    '&:disabled': {
      backgroundColor: 'rgba(77,194,116)'
    },
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&:focus': {
      backgroundColor: 'transparent'
    }
   
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
    color: 'white'
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
  }
}));

export default function GuessOutput({prob}) {
  const [userAnswer, setUserAnswer] = useState(null);
  const [isUserCorrect, setIsUserCorrect] = useState(null);
  const [nextQuestion, setNextQuestion] = useState(null);

  const Prob = {
    category: 'INTRODUCTION',
    title: 'For Loops',
    desc: 'Now flex your skills by guessing the output of the following code!',
    lessonLink: 'https://link.to.the.lesson.plan',
    question: `
            def printA(num):
                for i in range(0,num):
                    print('A')
                
                print('A' * num)
            
            print(A)
        `,
    options: [`A\nA\nA\n`, `AA\nA\nA\n`, `A\nA\nAAAA\n`],
    answer: 0 // index of options
  };

  const selectAnswer = option => {
    console.log(option);
    setUserAnswer(option);
  };

  const checkCorrect = () => {
    console.log(userAnswer);
    setIsUserCorrect(userAnswer === Prob.answer);
    return userAnswer === Prob.answer;
  };

  const classes = useStyles();

  return (
    <>
      <Fade in={isUserCorrect} timeout={{ enter: 800, exit: 1200,}} onEntered={() => setIsUserCorrect(false)} onExit={() => setNextQuestion(true)}>
        <div className={classes.correct}>
          <h1>Correct!</h1>
          <h2>Head onto the next question.</h2>
        </div>
      </Fade>

      <Container id="GuessOutput">
        <Description
          category={Prob.category}
          title={Prob.title}
          desc={Prob.desc}
          lessonLink={Prob.lessonLink}
        />

        <Grid container className={classes.root} spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              <Grid xs={6} key={0} item>
                <Paper className={classes.paper}>{Prob.question}</Paper>
              </Grid>
              <Grid xs={6} key={1} item>

                <Paper className={`${classes.paper}`}>
                  {Prob.options.map((option, i) => {
                    return (
                      <>
                        <button
                          className={`${classes.option} ${nextQuestion&&i===Prob.answer?classes.correctOption:null}`}
                          onClick={() => selectAnswer(i)}
                          disabled={nextQuestion}
                          >
                          {option}
                        </button>
                        <br />
                      </>
                    );
                  })}
                  {userAnswer !== null ? (
                    <Button onClick={checkCorrect} disabled={nextQuestion}>
                      <span className={`${classes.option} ${classes.submit}`}>
                        Submit
                      </span>
                    </Button>
                  ) : null}
                </Paper>
                  <Button className={classes.nextQuestion} style={{display: nextQuestion ? 'block' : 'none'}}>Head onto the next question ></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

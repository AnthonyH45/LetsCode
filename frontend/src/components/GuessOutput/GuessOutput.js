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
import Highlight from 'react-highlight'

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
    whiteSpace: 'pre-wrap',
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
    margin: theme.spacing(1),
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
  const [level, setLevel] = useState(0);

  const Prob = {
    category: 'INTRODUCTION',
    title: 'For Loops',
    desc: 'Now flex your skills by guessing the output of the following code!',
    lessonLink: 'https://link.to.the.lesson.plan',
    questions: [`
def printA(num):
    for i in range(0,num):
        print('A')

print(3)
        `,`
def printList(num):
  print( [ i for i in range(0,num) ] )

printList(3)
        `,`
def printVar(list_to_print):
    for i in list_to_print:
      print(i)

printVar( [1,"HELLO",3.14] )
        `],
    options: [
      [`A\nA\nA\n`, `AA\nA\nA\n`, `A\nA\nAAAA\n`],
      [`[1,3,5]\n`,`[3,2,1]\n`,`[1,2,3]\n`],
      [`HELLO\n1\n3.14`,`1\nHELLO\n3.14`,`[1,"HELLO",3.14]\n`]
    ],
    answers: [0,2,1] // index of options
  };
  const correct = () => {
    new Audio("https://freesound.org/data/previews/99/99636_1163166-lq.mp3").play();
  }
  const wrong = () => {
    new Audio("https://freesound.org/data/previews/140/140867_649468-lq.mp3").play();
  }

  const selectAnswer = option => {
    console.log("option:",option);
    setUserAnswer(option);
  };

  const checkCorrect = () => {
    console.log("useranswer:",userAnswer);
    setIsUserCorrect(userAnswer === Prob.answers[level]);
    if (userAnswer === Prob.answers[level]) {
      correct();
      return true;
    }
    wrong();
    return false;
  };

  const nextLevel = () => {
    setLevel(level+1);
    setIsUserCorrect(false);
    setUserAnswer(false);
    setNextQuestion(false);
  }

  const classes = useStyles();

  return (
    (level === 3) ? 
    <h1>Thats all the questions for now! Come back later!</h1> :
    (<>
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
                <Paper className={classes.paper}>
                  <Highlight innerHTML={true}>{'<p>Question</p>'}</Highlight>
                  <Highlight language="python">
                    {Prob.questions[level]}
                  </Highlight>
                </Paper>
              </Grid>
              <Grid xs={6} key={1} item>

                <Paper className={`${classes.paper}`}>
                  {Prob.options[level].map((option, i) => 
                    (
                      <Button
                        className={`${classes.option} ${(nextQuestion && i === Prob.answers[level]) ? classes.correctOption : null}`}
                        onClick={() => selectAnswer(i)}
                        disabled={nextQuestion}
                        variant="contained"
                        color="primary"
                        style={{maxWidth: '150px'}}
                        >
                        {option}
                      </Button>
                    )
                  )}
                  {userAnswer !== null ? (
                    <Button onClick={checkCorrect} disabled={nextQuestion}>
                      <span className={`${classes.option} ${classes.submit}`}>
                        Submit
                      </span>
                    </Button>
                  ) : <></> }
                </Paper>
                  <Button className={classes.nextQuestion} style={{display: nextQuestion ? 'block' : 'none'}} onClick={() => nextLevel()}> Head onto the next question &gt; </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </>)
  );
}

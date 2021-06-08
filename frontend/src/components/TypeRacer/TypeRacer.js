import React, { useEffect, useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  Container,
  Grid,
  Fade,
  Paper,
  Divider,
  useIsFocusVisible
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Highlight from 'react-highlight';

let timerStart = 0;

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
      backgroundColor: '#efefef'
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
    }
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
      fontStyle: 'italic'
    },
    good: {
      color: 'green'
    },
    bad: {
      color: 'red'
    },
    enter: {
      padding: '100px'
    }
  }
}));

export default function Typeracer() {
  const asd = 'this should be replaced';
  // 	const Prob = {
  // 		code: `def printEvensUntilTen():
  //     for i in [1,2,3,4,5,6,7,8,9,10]:
  //       if i % 2 == 0:
  //         print(i)
  //       else:
  //         print("Not Even")

  // def main():
  //     printEvensUntilTen()
  //     print("All done!")
  // `,
  // 	};

  const Prob = {
    code: `[[j%i for j in range(0,100)] for i in range(0,100)]`
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

  const GreenTextField = withStyles({
    root: {
      color: 'green'
    }
  })(Typography);

  const RedTextField = withStyles({
    root: {
      color: 'red'
    }
  })(Typography);

  const classes = useStyles();
  const [startTypeRacer, setStartTypeRacer] = useState(false);
  const [finishTypeRacer, setFinishTypeRacer] = useState(false);
  const [currentText, setCurrentText] = useState(asd);
  const [goodOrBad, setGoodOrBad] = useState(true);
  const [timer, setTimer] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (finishTypeRacer) {
      return () => clearInterval(interval);
    }
    const interval = setInterval(() => {
      if (startTypeRacer) {
        setTimer(timer => timer + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTypeRacer, finishTypeRacer]);


  const displayCurrentText = () => {
    return goodOrBad ? (
      <GreenTextField>{currentText}</GreenTextField>
    ) : (
      <RedTextField>{currentText}</RedTextField>
    );
  };

  const checkCorrect = () => {
    const cur = currentText.trim();
    const probc = Prob.code.slice(0, currentText.trim().length + 1).trim();

    if (cur.localeCompare(probc) === 0) {
      setGoodOrBad(true);
    } else {
      setGoodOrBad(false);
    }

    if (probc.trim().length === Prob.code.trim().length) {
      console.log('DONE!');
      setFinishTypeRacer(true);
    }
  };

  useEffect(() => {
    checkCorrect();
  });

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <h1>TIMER {timer} </h1>
        <Grid container justify="center" spacing={3}>
          <Grid xs={6} key={0} item>
            <Paper className={classes.paper}>
              <Highlight innerHTML={true}>
                {'<p>Type this to have the right and left match!</p>'}
              </Highlight>
              <Highlight language="python">{Prob.code}</Highlight>
            </Paper>
          </Grid>
          <Grid xs={6} key={1} item>
            <Paper className={`${classes.paper}`}>{displayCurrentText()}</Paper>
          </Grid>
        </Grid>

        <br />
        <Divider />
        <br />

        <Grid item xs>
          <TextField
            multiline
            className={`${classes.paper}`}
            rows={20}
            width="300px"
            onChange={e => {
              setCurrentText(e.target.value);
              setStartTypeRacer(true);
            }}
            placeholder={asd}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

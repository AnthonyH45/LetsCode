import React, { useState } from 'react';
import { 
  TextField,
  Typography,
  Button,
  Container,
  Grid,
  Fade,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    good: {
      color: 'green',
    },
    bad: {
      color: 'red',
    },
  }
}));

export default function Typeracer() {
  const Prob = {
    code:`
def printEvensUntilTen():
    for i in [1,2,3,4,5,6,7,8,9,10]:
      if i % 2 == 0:
        print(i)
      else:
        print("Not Even")

def main():
    printEvensUntilTen()
    print("All done!")
`
  }

  const correct = () => {
    new Audio("https://freesound.org/data/previews/99/99636_1163166-lq.mp3").play();
  }
  const wrong = () => {
    new Audio("https://freesound.org/data/previews/140/140867_649468-lq.mp3").play();
  }
  
  const [ currentText, setCurrentText ] = useState('');
  const [ goodOrBad, setGoodOrBad ] = useState(true)
  
  const handleText = (e) => {
    setCurrentText(e.target.value)
    console.log("Prob.code.slice(0,currentText.length+1).trim()",Prob.code.slice(0,currentText.length+1).trim())
    console.log("currentText",currentText)
    if (Prob.code.slice(0,currentText.length+1).trim() === currentText.trim() && currentText.length !== 0) {
      correct()
      setGoodOrBad(true)
    } else {
      wrong()
      setGoodOrBad(false)
    }
  }
  
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          
          <Grid xs={6} key={0} item>
            <Paper className={classes.paper}>
              <Highlight innerHTML={true}>{'<p>Question</p>'}</Highlight>
              <Highlight language="python">
                {Prob.code}
              </Highlight>
            </Paper>
          </Grid>

          <Grid xs={6} key={1} item>
            <Paper className={`${classes.paper}`}>
              <Typography className={goodOrBad ? classes.good : classes.bad}>
                {currentText}
              </Typography>
              <TextField onChange={(e) => handleText(e)} />            
            </Paper>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
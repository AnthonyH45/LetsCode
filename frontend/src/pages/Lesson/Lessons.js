import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/Navbar.js';
import Lesson from './Lesson';
import LessonNav from './LessonNav.js';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  lesson: {
    margin: '100px 75px 0px 20px'
  },
  bottomBar: { width: '100%', overflow: 'hidden', position: 'fixed', bottom: 0 }
}));
const Lessons = () => {
  const classes = useStyles();
  const lesson = {
    chapter: 'introduction',
    section: 'print',
    description: [
      {
        type: 'text',
        text: `In Python, the print() function are referred to as output functions.\nFor example, when we observe this program:`
      },
      {
        type: 'code',
        text: `print("Congratuations in taking the first steps in learning Python!")`
      },
      { type: 'text', text: `The output that results would be:` },
      {
        type: 'code',
        text: `Congratualtions in taking the first steps in learning Python`
      }
    ]
  };
  return (
    <Box className={classes.root}>
      <Navbar />
      <Box className={classes.lesson}>
        <Lesson lesson={lesson} />
      </Box>
      <div className={classes.bottomBar}>
        <LessonNav />
      </div>
    </Box>
  );
};

export default Lessons;

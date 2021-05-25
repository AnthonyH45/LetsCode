import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/Navbar.js';
import Lesson from './Lesson';
import LessonNav from './LessonNav.js';
const useStyles = makeStyles(theme => ({
    lesson: {
        margin: '75px 75px 0px 20px'
    },
    
}))
const Lessons = () => {
    const classes = useStyles();
    const lesson = {
        chapter: 'introduction',
        section: 'print',
        description: 
        `
        In Python, the print() function are referred to as output functions.
        For example, when we observe this program: 
        print("Congratuations in taking the first steps in learning Python!")
        The output that results would be:
        Congratualtions in taking the first steps in learning Python`
    }
    return (
        <Box>
            <Navbar/>
            <Box className={classes.lesson} marginBottom="25px" marginTop="75px">
                <Lesson lesson={lesson}/>
            </Box>
                <LessonNav/>  
        </Box>
    )

}

export default Lessons;
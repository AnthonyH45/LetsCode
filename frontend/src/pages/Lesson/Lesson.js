import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    chapter: {
        textTransform: 'uppercase',
    },
    section: {
        textTransform: 'capitalize'
    },
    description: {
        whiteSpace: 'pre-wrap',
    }
}));

const Lesson = ({lesson}) => {
    const classes = useStyles();
    
    return (
        <Box className={classes.root}>
            <h3 className={classes.chapter}>{lesson.chapter}</h3>
            <h1 className={classes.section}>{lesson.section}</h1>
            <p className={classes.description}>{lesson.description}</p>
            <iframe src="https://trinket.io/embed/python/c4dc8779f2" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>       
        </Box>
    );
}


export default Lesson
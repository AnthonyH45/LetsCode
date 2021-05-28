import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Code  from './Code.js';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '20px',
        width: '100%'
    },
    lesson: { margin:'56px', marginRight: '100px'},
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
            <Box className={classes.lesson}>
                <h3 className={classes.chapter}>{lesson.chapter}</h3>
                <h1 className={classes.section}>{lesson.section}</h1>
                {lesson.description.map(e => {
                    if (e.type === 'code') {
                        return <Code code={e.text}/>
                    }
                    return <p className={classes.description}>{e.text}</p>
                })}
                {/* <Code code={lesson.description}/>
                <p className={classes.description}>{lesson.description}</p> */}
            </Box>
            <iframe frameborder="0" width="50%" height="500px" src="https://create.withcode.uk/embed/EsW"></iframe>            
        </Box>
            // <iframe frameborder="0" width="50%" height="400px" src="https://create.withcode.uk/embed/EsW"><a target="_blank" href="https://create.withcode.uk/python/EsW">create.withcode.uk</a></iframe>            </Box>
    );
}


export default Lesson
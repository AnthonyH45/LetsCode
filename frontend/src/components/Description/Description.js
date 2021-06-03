import React from 'react';
import { 
    Card, CardActions, CardContent,
    Box,
    Button,
    Typography,
    Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

/*
    Description has a category, like `INTRODUCTION`
    Has a title, like `For Loops`
    And ofc a description, 
    ```
    Now let's see if you were paying attention!
    What is the ouput of the following code?
    ```
*/
export default function Description(props) {
    const {category, title, desc, lessonLink} = props;
    // const pD = {
    //     category: "INTRODUCTION",
    //     title: "For Loops",
    //     desc: "Now flex your skills by guessing the output of the following code!",
    //     lessonLink: "https://link.to.the.lesson.plan",
    // }

    const classes = useStyles();

    return (
        <Box id="description" component="span" m={1}>
            <Card className={classes.root}>
                <CardContent className={classes.title}>
                    <Box align="left" alignItems="left" justifyContent="left">
                        <Typography variant="h6" color="textSecondary" gutterBottom>{category}</Typography>
                        <Typography variant="h4">{title}</Typography>
                        <Typography>{desc}</Typography>
                    </Box>
                    <CardActions>
                        <Link to={lessonLink}>
                          <Button size="small">Lesson Plan</Button>
                        </Link>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    );
}


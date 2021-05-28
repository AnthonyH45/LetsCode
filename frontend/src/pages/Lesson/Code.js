import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#f2f2f2',
      margin: '10px 0',
    //   margin: '56px 56px 0',
      padding: '26px',
      fontFamily: 'Courier New',
      width: '100%',
      whiteSpace: 'pre-wrap',
      display: 'inline-block',
      textAlign: 'justify',
    },
    
  }));

const Code = ({code}) => {
    const classes = useStyles();
    return (<Box className={classes.root}><p >{code}</p></Box>);
};

export default Code;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import ComputerIcon from '@material-ui/icons/Computer';

import icon from '../../assets/icon.svg';

const useStyles = makeStyles({
    nav: {
      borderBottom: '1px solid grey',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      position: 'fixed',
      top: '0',
      padding: '10px 20px'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: '100px'
    }
});


const Navbar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.nav}>
            <img src={icon} alt="thisisanicon" className={classes.icon}/>
            <Link to='/demoproblem'>
                <Box className={classes.item}>
                    <Box component="span"><ComputerIcon/> Learn</Box>
                </Box>
            </Link>
            <Link to='/coderacing'>
                <Box className={classes.item}>
                    <Box component="span"><CodeIcon/> Code Racing</Box>
                </Box>
            </Link>
            <Link>
                <Box className={classes.item}>
                    <Box component="span"><PersonIcon/> Profile</Box>
                </Box>
            </Link>
        </Box>
    );
}

export default Navbar;


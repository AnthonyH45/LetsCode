import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Menu, MenuItem  } from '@material-ui/core';
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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <Box className={classes.nav}>
            <Link to='/'>
                <img src={icon} alt="thisisanicon" className={classes.icon}/>
            </Link>

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
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <PersonIcon/> Profile
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to='/demoproblem'>
                            My Lessons
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/signin'>
                            My Account
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/'>
                            Logout
                        </Link>
                    </MenuItem>
                </Menu>
                </Box>
            </Link>
        </Box>
    );
}

export default Navbar;


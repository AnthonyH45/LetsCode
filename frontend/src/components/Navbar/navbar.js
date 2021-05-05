import React from 'react';
import { Link } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import ComputerIcon from '@material-ui/icons/Computer';

import icon from '../../assets/icon.svg';

const useStyles = makeStyles({
    nav: {
      borderBottom: '1px solid grey',
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    },
    icon: {
        width: '100px'
    }
});


const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.nav}>
            <img src={icon} alt="thisisanicon" className={classes.icon}/>
            <div>
                <ComputerIcon/>
                <p>Learn</p>
            </div>
            <div>
                <CodeIcon/>
                <p>Code Racing</p>
            </div>
            <div>
                <PersonIcon/>
                <p>Profile</p>
            </div>
        </div>
    );
}

export default Navbar;


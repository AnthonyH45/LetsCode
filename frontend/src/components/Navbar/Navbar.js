import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import ComputerIcon from '@material-ui/icons/Computer';

import icon from '../../assets/icon.svg';

const useStyles = makeStyles({
  nav: {
    boxShadow: '-1px 1px 3px rgba(1,1,1,0.5)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    top: '0',
    padding: '10px 50px',
    backgroundColor: 'white',
    zIndex: 10
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '100px'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
});

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={`${classes.nav}`}>
			<Link to='/'>
				<img src={icon} alt='thisisanicon' className={classes.icon} />
			</Link>

			<Link to='/demoproblem' className={classes.link}>
				<Box>
					<Box component='span' className={`${classes.item}`}>
						<ComputerIcon /> Learn
					</Box>
				</Box>
			</Link>

			<Link to='/coderacing' className={classes.link}>
				<Box>
					<Box component='span' className={`${classes.item}`}>
						<CodeIcon /> Code Racing
					</Box>
				</Box>
			</Link>

			<Link className={classes.link}>
				<Box>
					<Button
						aria-controls='simple-menu'
						aria-haspopup='true'
						onClick={handleClick}
						className={`${classes.link} ${classes.item}`}
					>
						<PersonIcon /> Profile
					</Button>
					<Menu
						id='simple-menu'
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>
							<Link to='/lessonsPython' className={classes.link}>
								My Lessons
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/profile/snake' className={classes.link}>
								My Account
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/' className={classes.link}>
								Logout
							</Link>
						</MenuItem>
					</Menu>
				</Box>
			</Link>
		</Box>
  );
};

export default Navbar;

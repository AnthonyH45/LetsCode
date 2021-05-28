import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import logo from './../../assets/white_logo.svg';
import Copyright from '../../components/Copyright/Copyright.js';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3];

export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img src={logo} alt="thisisanicon"/>
          <Typography variant="h6" color="inherit" noWrap>
            LetsCode
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Ever want to learn how to code?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Start learning with LetsCode!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to='/signin'>
                    <Button variant="contained" color="primary" href="/signin">
                      Sign In
                    </Button>
                  </Link>
                </Grid>

                <Grid item>
                  <Link to='/signup'>
                    <Button variant="outlined" color="primary" href="/signup">
                      Sign Up
                    </Button>
                  </Link>
                </Grid>
              </Grid>

              <br/>
              <Divider />
              <br/>

              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to='/guessoutput'>
                    <Button variant="outlined" color="primary">
                      Guess Output
                    </Button>
                  </Link>
                </Grid>

                <Grid item>
                  <Link to='/fillin'>
                    <Button variant="outlined" color="primary">
                      Fill In
                    </Button>
                  </Link>
                </Grid>
              </Grid>

            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item key={0} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/originals/91/94/c9/9194c978fa63798b2e882e6fda5eb953.png"
                    title="Python Logo"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Python
                    </Typography>
                    <Typography>
                      Ssss not the ssssnake, but just as cool 😎
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to='/lessonplan'>
                      <Button size="small" color="primary">
                        Learn
                      </Button>
                    </Link>

                    <Link to='/guessoutput'>
                      <Button size="small" color="primary">
                        Guess Output
                      </Button>
                    </Link>

                    <Link to='/fillin'>
                      <Button size="small" color="primary">
                        Fill In
                      </Button>
                    </Link>
                    
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    src="https://i.pinimg.com/736x/a2/dc/32/a2dc3249364449a49f01a6275d277b8c.jpg"
                    title="C++ Logo"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      C++ (Coming soon)
                    </Typography>
                    <Typography>
                      Need to add 1 to an integer value? ++ has your back. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" disabled="true">
                      Learn
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={2} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://camo.githubusercontent.com/94761affed6454156a526a0fcab454ed4a432d9472087a9d330598a38ffe56cd/68747470733a2f2f7261772e6769746875622e636f6d2f676f6c616e672d73616d706c65732f676f706865722d766563746f722f6d61737465722f676f706865722e706e67"
                    title="Go Logo"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Go (Coming soon)
                    </Typography>
                    <Typography>
                      Blue gopher.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" disabled="true">
                      Learn
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

            {/* {cards.map((card) => (
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Let's learn, Let's have fun, LetsCode!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
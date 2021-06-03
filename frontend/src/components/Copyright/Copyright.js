import { Link, Typography } from '@material-ui/core';
import Ad from '../Ad/Ad.js';

export default function Copyright() {
    return (
      <>
        <Ad/>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            LetsCode
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </>
    );
}
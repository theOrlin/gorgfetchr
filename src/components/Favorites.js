import { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';

function Favorites(props) {
  const { classes } = props;

  return (
    <Card className={classes.paper}>
      <Typography color="textSecondary" align="center">
        <h1>Favorites</h1>
      </Typography>
    </Card>
  );
}

export default withStyles(styles)(Favorites);

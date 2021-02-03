import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';
import {
  Avatar,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle as div,
  IconButton,
  Typography
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';


function RepoCard(props) {
  const { classes, orgName, orgDescription, avatarSrc } = props;
  const [ favorite, setFavorite ] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card className={(classes.paper, classes.card)}>
      <div>
        <Typography>
          <p>Repository Repository Repository Repository Repository Repository </p>
          <p>Repo details</p>
        </Typography>
      </div>
      {favorite && (
        <StarIcon style={{ fontSize: 60, color: 'gold' }} className={classes.starButton} onClick={toggleFavorite} />
      )}
      {!favorite && (
        <StarBorderIcon
          style={{ fontSize: 60, color: 'gray' }}
          className={classes.starButton}
          onClick={toggleFavorite}
        />
      )}
      <Button variant="contained" color="default">
        View
      </Button>
    </Card>
  );
}

export default withStyles(styles)(RepoCard);

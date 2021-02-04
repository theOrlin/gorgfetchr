// import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import styles from '../styles/styles';
import { Button, Card, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function RepoCard(props) {
  const { classes, repoName, repoUrl, openIssues, forks, watchers, isFavorite, toggleFavoriteStatus } = props;

  return (
    <Card className={(classes.paper, classes.card)}>
      <div>
        <Typography variant="h5">{repoName}</Typography>
        <Typography variant="body2">
          Forks: {forks} Open issues: {openIssues} Watchers: {watchers}
        </Typography>
      </div>
      {isFavorite && (
        <StarIcon
          style={{ fontSize: 60, color: 'gold' }}
          className={classes.starButton}
          onClick={() => toggleFavoriteStatus(repoUrl)}
        />
      )}
      {!isFavorite && (
        <StarBorderIcon
          style={{ fontSize: 60, color: 'gray' }}
          className={classes.starButton}
          onClick={() => toggleFavoriteStatus(repoUrl)}
        />
      )}
      <Button startIcon={<OpenInNewIcon />} variant="contained" color="default" href={repoUrl} target="_blank">
        View
      </Button>
    </Card>
  );
}

export default withStyles(styles)(RepoCard);

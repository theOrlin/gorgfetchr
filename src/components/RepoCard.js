import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import styles from '../styles/styles';
import { Button, Card, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function RepoCard(props) {
  const { classes, repoName, repoUrl, openIssues, forks, watchers } = props;
  const [ favorite, setFavorite ] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card className={(classes.paper, classes.card)}>
      <div>
        <Typography>
          <p>{repoName}</p>
          <p>
            Forks: {forks} Open issues: {openIssues} Watchers: {watchers}
          </p>
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
      <Button startIcon={<OpenInNewIcon />} variant="contained" color="default" href={repoUrl} target="_blank">
        View
      </Button>
    </Card>
  );
}

export default withStyles(styles)(RepoCard);

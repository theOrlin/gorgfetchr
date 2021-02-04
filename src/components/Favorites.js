import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import RepoCard from './RepoCard';
import styles from '../styles/styles';

function Favorites(props) {
  const { classes } = props;
  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('gorgFav')) || []);
  }, []);

  const toggleFavoriteStatus =(repoUrl) => {
    const newFavorites = favorites.filter((repo) => repo.repoUrl !== repoUrl);

    localStorage.setItem('gorgFav', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }

  console.log('favorites', favorites);
  return (
    <React.Fragment>
      <Typography variant="h3" align="center">
        Favorites
      </Typography>
      {favorites.length === 0 && (
        <Typography variant="h5" color="textSecondary" align="center">
          No favorite repositories found
        </Typography>
      )}
      {favorites.map((repo) => (
        <RepoCard repoName={repo.repoName} repoUrl={repo.repoUrl} openIssues={repo.openIssues} forks={repo.forks} watchers={repo.watchers} isFavorite={true} toggleFavoriteStatus={toggleFavoriteStatus} />
      ))}
    </React.Fragment>
  );
}

export default withStyles(styles)(Favorites);

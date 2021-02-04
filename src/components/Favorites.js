import React, { useState, useEffect } from 'react';
import { Typography, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import RepoCard from './RepoCard';
import styles from '../styles/styles';

function Favorites(props) {
  const { classes } = props;
  const [ favorites, setFavorites ] = useState([]);
  const [ sortBy, setSortBy ] = useState('');

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('gorgFav')) || []);
  }, []);

  const toggleFavoriteStatus = (repoUrl) => {
    const newFavorites = favorites.filter((repo) => repo.repoUrl !== repoUrl);

    localStorage.setItem('gorgFav', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const handleSort = (e) => {
    sortFavorites(e.target.value);
    setSortBy(e.target.value);
  };

  const sortFavorites = (setSortBy) => {
    switch (setSortBy) {
      case 'repoName':
        favorites.sort((a, b) => {
          return a.repoName > b.repoName ? 1 : -1;
        });
        return setFavorites(favorites);
      case 'orgName':
        favorites.sort((a, b) => {
          return a.orgName > b.orgName ? 1 : -1;
        });
        return setFavorites(favorites);
      case 'dateAdded':
        favorites.sort((a, b) => {
          return a.dateAdded - b.dateAdded;
        });
        return setFavorites(favorites);
      default:
        return setFavorites(JSON.parse(localStorage.getItem('gorgFav')));
    }
  };

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
      {favorites.length > 0 && (
        <FormControl variant="standard" className={classes.formControl}>
          <InputLabel>Sort by</InputLabel>
          <Select value={sortBy} onChange={handleSort}>
            <MenuItem value={'repoName'}>Repository name</MenuItem>
            <MenuItem value={'orgName'}>Organization name</MenuItem>
            <MenuItem value={'dateAdded'}>Date added</MenuItem>
          </Select>
        </FormControl>
      )}
      {favorites.map((repo) => (
        <RepoCard
          key={repo.repoName}
          repoName={repo.repoName}
          repoUrl={repo.repoUrl}
          openIssues={repo.openIssues}
          forks={repo.forks}
          watchers={repo.watchers}
          isFavorite={true}
          toggleFavoriteStatus={toggleFavoriteStatus}
        />
      ))}
    </React.Fragment>
  );
}

export default withStyles(styles)(Favorites);

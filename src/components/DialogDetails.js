import { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';
import { DialogContent } from '@material-ui/core';
import RepoCard from './RepoCard';

function DialogDetails(props) {
  const { orgName } = props;
  const [ favorites, setFavorites ] = useState([]);
  const [ repos, setRepos ] = useState([]);

  useEffect(
    () => {
      axios.get(`https://api.github.com/orgs/${orgName}/repos`).then((result) => setRepos(result.data));
      const currentFavorites = JSON.parse(localStorage.getItem('gorgFav')) || [];
      setFavorites(currentFavorites);
    },
    [ orgName ]
  );

  const hasFavoriteStatus = (repoUrl) => {
    return favorites.some((repo) => repo.repoUrl === repoUrl);
  };

  const toggleFavoriteStatus = (repoUrl) => {
    if (hasFavoriteStatus(repoUrl)) {
      const newFavorites = favorites.filter((repo) => repo.repoUrl !== repoUrl);

      localStorage.setItem('gorgFav', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } else {
      const repoIndex = repos.findIndex((repo) => repo.html_url === repoUrl);
      const newFavorites = favorites.slice();
      const objToAdd = {
        repoName: repos[repoIndex].name,
        repoUrl: repos[repoIndex].html_url,
        openIssues: repos[repoIndex].open_issues_count,
        forks: repos[repoIndex].forks_count,
        watchers: repos[repoIndex].watchers_count
      };

      newFavorites.push(objToAdd);
      localStorage.setItem('gorgFav', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
  };

  return (
    <DialogContent>
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repoName={repo.name}
          repoUrl={repo.html_url}
          forks={repo.forks_count}
          openIssues={repo.open_issues_count}
          watchers={repo.watchers_count}
          toggleFavoriteStatus={toggleFavoriteStatus}
          isFavorite={hasFavoriteStatus(repo.html_url)}
        />
      ))}
    </DialogContent>
  );
}

export default withStyles(styles)(DialogDetails);

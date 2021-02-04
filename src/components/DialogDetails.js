import { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';
import { DialogContent } from '@material-ui/core';
import RepoCard from './RepoCard';

function DialogDetails(props) {
  const { orgName } = props;

  const [ repos, setRepos ] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/orgs/${orgName}/repos`).then((result) => setRepos(result.data));
  }, [orgName]);

  return (
    <DialogContent>
      {repos.map((repo) => (
        <RepoCard
          repoName={repo.name}
          repoUrl={repo.html_url}
          forks={repo.forks_count}
          openIssues={repo.open_issues_count}
          watchers={repo.watchers_count}
        />
      ))}
    </DialogContent>
  );
}

export default withStyles(styles)(DialogDetails);

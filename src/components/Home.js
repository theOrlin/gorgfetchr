import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import styles from '../styles/styles';
import OrgCard from './OrgCard';


function Home(props) {
  const { classes } = props;
  const [ organizationsList, setOrganizationsList ] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/organizations').then((result) => setOrganizationsList(result.data));
  }, []);

  const loadMore = () => {
    console.log('Last item:', organizationsList[organizationsList.length - 1].id);
    axios
      .get(`https://api.github.com/organizations?since=${organizationsList[organizationsList.length - 1].id}`)
      .then((result) => setOrganizationsList(organizationsList.concat(result.data)));
  };

  return (
    <React.Fragment>
      <Typography align={'center'}>
        <h2>Github organizations</h2>
        <p />
      </Typography>
      {organizationsList.map((org) => (
        <OrgCard key={org.id} avatarSrc={org.avatar_url} orgDescription={org.description} orgName={org.login} />
      ))}
      <Button
        onClick={loadMore}
        className={classes.loadMoreButton}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<GetAppIcon />}
      >
        Load more
      </Button>
    </React.Fragment>
  );
}

export default withStyles(styles)(Home);

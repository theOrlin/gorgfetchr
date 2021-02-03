import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';
import OrgCard from './OrgCard';

function Home(props) {
  const { classes } = props;
  const [ selectedTab, setSelectedTab ] = useState(0);

  return (
    <>
      <Typography align={'center'}>
        <h2>Github organizations</h2>
        <p></p>
      </Typography>
      <OrgCard
        avatarSrc="https://avatars3.githubusercontent.com/u/9919"
        orgName="Organization name"
        orgDescription="Organization description"
      />
      <OrgCard
        avatarSrc="https://avatars3.githubusercontent.com/u/9919"
        orgName="Organization name"
        orgDescription="Organization description"
      />
      <OrgCard
        avatarSrc="https://avatars3.githubusercontent.com/u/9919"
        orgName="Organization name"
        orgDescription="Organization description"
      />
    </>
  );
}

export default withStyles(styles)(Home);

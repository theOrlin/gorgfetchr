import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';

function Nav(props) {
  const [ selected, setSelected ] = useState('');
  const { classes } = props;
  let history = useHistory();
  let location = useLocation();
  console.log(classes);

  useEffect(
    () => {
      setSelected(location.pathname.substring(1));
    },
    [ location.pathname ]
  );

  const goHome = (e) => {
    history.push('/home');
  };

  const goToFavorites = (e) => {
    history.push('/favorites');
  };

  return (
    <Drawer variant="permanent" className={classes.drawer} classes={{ paper: classes.drawer }}>
      <List disablePadding>
        <ListItem>Github Fetcher</ListItem>
        <Divider />
        <ListItem button className={selected === 'home' ? classes.currentLink : ''} onClick={goHome}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button className={selected === 'favorites' ? classes.currentLink : ''} onClick={goToFavorites}>
          <ListItemText>Favorites</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}

export default withStyles(styles)(Nav);

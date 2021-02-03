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
import RepoCard from './RepoCard';

function DialogDetails(props) {
  const { classes, orgName, orgDescription, avatarSrc } = props;
  const [ favorite, setFavorite ] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <DialogContent>
        <RepoCard ></RepoCard>
        <RepoCard ></RepoCard>
        <RepoCard ></RepoCard>
        <RepoCard ></RepoCard>
        <RepoCard ></RepoCard>
    </DialogContent>
  );
}

export default withStyles(styles)(DialogDetails);

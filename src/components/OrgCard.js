import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';
import { Avatar, Button, Card, Dialog, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DialogDetails from './DialogDetails';

function OrgCard(props) {
  const { classes, orgName, orgDescription, avatarSrc } = props;
  const [ open, setOpen ] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card className={(classes.paper, classes.card)}>
        <Avatar src={avatarSrc} className={classes.avatarLarge} />
        <div>
          <Typography variant="h5">{orgName}</Typography>
          <Typography variant="subtitle1">{orgDescription}</Typography>
        </div>
        <Button variant="contained" color="default" onClick={handleClickOpen}>
          View more
        </Button>
      </Card>
      <Dialog open={open} onClose={handleClose} maxWidth={'lg'} fullWidth>
        <div className={classes.modalTitle}>
          <Avatar src={avatarSrc} className={classes.avatarMed} />
          <div className={classes.modalTitleText}>
            <Typography variant="h4">{orgName}</Typography>
            <Typography variant="body1">{orgDescription}</Typography>
          </div>
          <div className={classes.modalTitleClose}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <DialogDetails orgName={orgName} />
      </Dialog>
    </React.Fragment>
  );
}

export default withStyles(styles)(OrgCard);

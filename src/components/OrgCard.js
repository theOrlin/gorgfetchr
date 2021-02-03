import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';
import { Avatar, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle as div, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DialogDetails from './DialogDetails';

function OrgCard(props) {
  const { classes, orgName, orgDescription, avatarSrc } = props;
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={(classes.paper, classes.card)}>
        <Avatar src={avatarSrc} className={classes.avatarLarge} />
        <div>
          <Typography>
            <h3>{orgName}</h3>
            <p>{orgDescription}</p>
          </Typography>
        </div>
        <Button variant="contained" color="default" onClick={handleClickOpen}>
          View more
        </Button>
      </Card>
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={'lg'}
            fullWidth
          >
          <div className={classes.modalTitle}>
          <Avatar src={avatarSrc} className={classes.avatarMed}/>
          <div className={classes.modalTitleText}>
            <Typography>
              <h3>{orgName}</h3>
              <p>{orgDescription}</p>
            </Typography>
          </div>
          <div className={classes.modalTitleClose}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <DialogDetails></DialogDetails>
      </Dialog>
    </>
  );
}

export default withStyles(styles)(OrgCard);

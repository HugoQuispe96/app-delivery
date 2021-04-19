import { Avatar, Container, Divider, Typography, Grid, IconButton } from '@material-ui/core';
import { WhatsApp, Share, Phone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
//import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '10vh',
    paddingBottom: '3vh',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: 'auto'
  },
  text: {
    color: 'green',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '25px',
    fontWeight: 'bold'
  },
  divider: {
    marginBottom: '10px',
  }
}));

const InfoHeader = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Avatar alt="Imagen Principal" src="https://admin.alacarta.online/files/Sakura%20redondo.png" className={classes.large} />
      <Typography variant="h1" className={classes.text}>Abierto</Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <IconButton aria-label="Whatsapp">
            <WhatsApp />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton aria-label="Llamar">
            <Phone />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton aria-label="Compartir">
            <Share />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InfoHeader;
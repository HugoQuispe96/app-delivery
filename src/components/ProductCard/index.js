import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Divider, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '10px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(14),
    flexShrink: 0,
  },
  description: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
  },
  price: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
  },
  image: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto'
  },
  divider: {
    marginBottom: '10px',
  }
}));

export default function ProductCard({ name, description, price, image, isDelivery }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h3" className={classes.name}>{name}</Typography>
          <Typography variant="body1" className={classes.description}>{description}</Typography>
          <Typography variant="body2" className={classes.price}>{price}</Typography>
          {isDelivery &&
            <Button size="small" variant="outlined" color="primary">
              Pedir
            </Button>
          }
        </Grid>
        <Grid item xs={4}>
          <Avatar variant="rounded" src={image} className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
}
import { IconButton, Typography, Grid } from '@material-ui/core';
import { redesSociales } from '../../data/redes_sociales';
import { makeStyles } from '@material-ui/core/styles';
import { iconosSociales } from '../../utiles/iconos'

const useStyles = makeStyles((theme) => ({
  text: {
    color: '#737373',
    fontSize: '20px',
    fontWeight: 'bold'
  },
}));

const RedesSociales = () => {
  const classes = useStyles();
  const socialButtons = redesSociales.map((social) => {
    if (social.isEnable) {
      return <Grid key={social.name} item xs={12}>
        <a href={social.link} target="_blank" rel="noreferrer">
          <IconButton aria-label={social.name}>
            {iconosSociales(social.icon)}
          </IconButton>
        </a>
      </Grid>
    }
    else {
      return false
    }
  })
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.text}>Encuentranos en:</Typography>
        </Grid>
        {socialButtons}
      </Grid>
    </div>
  );
}

export default RedesSociales;
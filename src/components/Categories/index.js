import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../ProductCard';
import { categorias } from '../../data/categorias';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
  },
}));

export default function Categories({ isDelivery }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const listCategories = categorias.map((categoria) =>
    <Accordion key={categoria.id} expanded={expanded === categoria.id} onChange={handleChange(categoria.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${categoria.id}bh-content`}
        id={`${categoria.id}bh-header`}
      >
        <Grid container>
          <Grid item md={4} xs={12}>
            <Typography className={classes.heading}>{categoria.title}</Typography>
          </Grid>
          <Grid item md={8} xs={12}>
            <Typography className={classes.secondaryHeading}>{categoria.subtittle}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={12}>
            {categoria.items.map((product) => <ProductCard key={product.name} {...product} isDelivery={isDelivery} />)}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <div className={classes.root}>
      {listCategories}
    </div>
  );
}
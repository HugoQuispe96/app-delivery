import { Fab } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { LocalMall } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const CartButton = () => {
  const classes = useStyles();
  return (
    <div>
      <Fab variant="extended" aria-label="Cart" className={classes.fab} color="primary">
        <LocalMall />
      </Fab>
    </div>
  );
}

export default CartButton;
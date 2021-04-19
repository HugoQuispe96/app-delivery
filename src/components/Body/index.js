import { Container } from '@material-ui/core';
import Delivery from '../../views/Delivery';
import Carta from '../../views/Carta';
import RedesSociales from '../../views/RedesSociales';
import Ubicacion from '../../views/Ubicacion';
import Horario from '../../views/Horario';
import { Switch, Route } from "react-router-dom";

const Body = () => {
  return (
    <Container maxWidth="md">
      <Switch>
        <Route path="/redes">
          <RedesSociales />
        </Route>
        <Route path="/ubicacion">
          <Ubicacion />
        </Route>
        <Route path="/horario">
          <Horario />
        </Route>
        <Route path="/carta">
          <Carta />
        </Route>
        <Route path="/">
          <Delivery />
        </Route>
      </Switch>
    </Container>
  );
}

export default Body;
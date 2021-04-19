import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Body from './components/Body';
import CartButton from './components/CartButton';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <InfoHeader />
        <Body />
        <CartButton />
      </Router>
    </div>
  );
}

export default App;

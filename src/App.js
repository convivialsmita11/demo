import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesWay from './Routes';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/meanmenu.css";
import "./assets/css/responsive.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/odometer.min.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesWay />
    </BrowserRouter>
  );
}

export default App;

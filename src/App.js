import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Componets/Home/Home';
import Aboute from './Componets/Aboute/Aboute';
import Compitition from './Componets/Compitition/Compitition';
import NotFound from './Componets/NotFound/NotFound';
import Header from './Componets/Header/Header';
import Footer from './Componets/Footer/Footer';
import Service from './Componets/Service/Service';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboute">
            <Aboute></Aboute>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/compititon">
            <Compitition></Compitition>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Route>
          <Footer></Footer>
        </Route>
      </Router>
    </div>
  );
}

export default App;

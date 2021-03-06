
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Componets/Home/Home';
import Aboute from './Componets/Aboute/Aboute';
import NotFound from './Componets/NotFound/NotFound';
import Header from './Componets/Header/Header';
import Service from './Componets/Services/Services';
import Apply from './Componets/Apply/Apply';


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
          <Route path="/apply">
            <Apply></Apply>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

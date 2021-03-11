import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import LeagueInfo from './components/LeagueInfo/LeagueInfo';

function App() {
  return (
    <Router>

      <Switch>

        <Route path="/home">
            <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/league/:leagueId">

          <LeagueInfo></LeagueInfo>
            
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>

    </Router>

  );
}

export default App;

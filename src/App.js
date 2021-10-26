
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { NavBar } from './components/Navbar/NavBar';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;

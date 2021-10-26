
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { NavBar } from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>


        </Switch>

      </Router>
    </div>
  );
}

export default App;

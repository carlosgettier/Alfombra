
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { NavBar } from './components/Navbar/NavBar';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { News } from './components/News/News';
import { Press } from './components/Press/Press';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Production } from './components/Production/Production';
import { New } from './components/New/New';
import { Prensa } from './components/Prensa/Prensa';
import { Administracion } from './components/Administracion/Administracion';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/category/press/:title">
            <New />
          </Route>
          <Route exact path="/category/news/:title">
            <Prensa />
          </Route>
          <Route exact path="/category/news">
            <News />
          </Route>
          <Route exact path="/category/press">
            <Press />
          </Route>
          <Route exact path="/administracion">
            <Administracion />
          </Route>
          <Route exact path="/production">
            <Production />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <h1>no exite</h1>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

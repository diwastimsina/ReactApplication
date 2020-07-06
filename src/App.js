import React, { component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Activities from './components/Activities';

class App extends component {
  render() {
    return (
    <Router>
        <div>
          <h1> This COSL PAGE!</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/Team'} className="nav-link">Team</Link></li>
            <li><Link to={'/Activities'} className="nav-link">Activities</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/team' component={Team} />
              <Route path='/activities' component={Activities} />
          </Switch> 
        </div>
    </Router>
    );
  }
}

export default App;
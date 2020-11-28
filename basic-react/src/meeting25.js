import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Home, Login, Register } from './pages';

const App = () =>{
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <button>
              <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/login"> 
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      </div>

    </Router>
  );
};

export default App;
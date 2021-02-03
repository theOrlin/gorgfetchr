import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import Nav from './components/Nav';
import Home from './components/Home';
import Favorites from './components/Favorites';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <Grid container spacing={5}>
        <Grid item xs={1}>
          <Nav />
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import ScreenDrawer from './components/ScreenDrawer/ScreenDrawer';

function App() {
  return(
    <Router>
      <div className={"App"}>
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/white" />
        </Route>
          <Route exact path="/white" >
            <ScreenDrawer color={"white"}/>
          </Route>
          <Route path="/blue">
            <ScreenDrawer color={"blue"}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
// import Switch from 'react-router';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Switch, Route } from 'react-router'


import About from './About';


const Content = () => {
    return(
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
    )
}

export default Content;

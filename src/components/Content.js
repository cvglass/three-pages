import React from 'react';
// import Switch from 'react-router';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Switch, Route } from 'react-router'


import About from './About';
import Archives from './Archives'


const Content = () => {
    return(
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/old' component={Archives} />
      </Switch>
    )
}

export default Content;

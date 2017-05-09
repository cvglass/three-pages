import React from 'react';
import { Switch, Route } from 'react-router'

import About from './About';
import Archives from './Archives';
import Entry from './Entry';

const Content = () => {
    return(
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/old' component={Archives} />
        <Route path='/entry/:id' component={Entry} />
      </Switch>
    )
}

export default Content;

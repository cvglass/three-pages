import React from 'react';
import { Switch, Route } from 'react-router'

import About from './About';
import Archives from './Archives';
import Entry from './Entry';
import Textbox from './Textbox';
import TextboxContainer from './TextboxContainer';
import Delete from './Delete';

const Content = () => {
    return(
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/old' component={Archives} />
        <Route path='/new' component={Textbox} />
        <Route exact path='/entry/:id' component={Entry} />
        <Route exact path='/entry/:id/edit' component={TextboxContainer} />
        <Route exact path='/entry/:id/delete' component={Delete} />


      </Switch>
    )
}

export default Content;

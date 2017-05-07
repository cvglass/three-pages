import React from 'react';
import { Link } from 'react-router';

import store from '../store';
import { getArchives } from '../actionCreators';

class Archives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  componentWillMount() {
    store.dispatch(getArchives())
  }

  componentWillReceiveProps(nextProps) {
    console.log('next props', nextProps)
    this.setState({entries: nextProps.entries})
  }

  render() {
    return (
      <div className="container">
        <div className="list-group">
          {this.state.entries.map(entry => {
            console.log('entry', entry)
            return(
              <a key={entry.id} className="list-group-item"><Link to={`/entry/${entry.id}`}>{entry.month}/{entry.day}/{entry.year}</Link></a>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Archives;

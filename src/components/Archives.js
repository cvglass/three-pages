import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../store';
import { getArchives } from '../actionCreators';

class Archives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    fetch('/api/entries')
      .then(res => res.json())
      .then(entries => {
        console.log(entries)
        this.setState({entries})
      })
  }

  render() {
    return (
      <div className="container">
        <div className="list-group">
          {this.state.entries.map(entry => {
            return(
              <a key={entry.id} className="list-group-item"><Link to={`/entry/${entry.id}`}>{entry.month}/{entry.day}/{entry.year}</Link></a>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Archives

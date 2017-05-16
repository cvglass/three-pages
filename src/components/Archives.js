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
        this.setState({entries})
      })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(nextProps) {
      fetch(`/api/entries/${nextProps.id}/delete`)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="list-group">
          {this.state.entries.map(entry => {
            return(
              <Link to={`/entry/${entry.id}`} className="list-group-item" key={entry.id}>{entry.month}/{entry.day}/{entry.year}</Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Archives

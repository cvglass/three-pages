import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {}
    }
  }

  componentDidMount() {
    fetch(`/api/entries/${this.props.id}`)
      .then(res => res.json())
      .then(entry => this.setState({entry}))
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h3>{this.state.entry.month}/{this.state.entry.day}/{this.state.entry.year}</h3>
            <p>{this.state.entry.text}</p>
            <div className="btn-group btn-group-xs" role="group" aria-label="...">
              <button type="button" className="btn btn-default"><Link to={`/entry/${this.state.entry.id}/edit`}>edit</Link></button>
              <a href={`/api/entries/${this.props.id}/delete`}>delete</a>
            </div>
          </div>
        </div>
        <div className="container">
          <h3>Overall, you're feeling <em>{this.state.entry.sentiment}</em> today,</h3>
          <h5>because you used the following words: {this.state.entry.topWords}</h5>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id
})

export default withRouter(connect(mapStateToProps)(Entry))

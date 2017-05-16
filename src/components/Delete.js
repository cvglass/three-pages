import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Delete extends React.Component {
  componentDidMount() {
    fetch(`/api/entries/${this.props.id}/delete`);

    setTimeout(function() {
       window.location = '/old'
      }, 3000)
  }

  render() {
    return(
      <div className="jumbotron">
        <div className="container">
          <p>Entry deleted. If page doesn't redirect in 5 seconds, click <Link to="/old">here</Link></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id
})

export default withRouter(connect(mapStateToProps)(Delete))

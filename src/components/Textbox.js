import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {},
      value: ''
    }
  }

  componentDidMount() {
    if(this.props.id) {
      fetch(`/api/entries/${this.props.id}`)
        .then(res => res.json())
        .then(entry => this.setState({entry, value: entry.text}))
    }
  }

  componentWillUnmount() {
    this.setState({entry: {}})
  }

  render() {
    if (!this.state.entry.month){
      var month = new Date().getMonth() + 1;
      var day = new Date().getDate();
      var year = new Date().getFullYear();
      var formMethod = 'POST';
      var formAction = '/api/entries';
      // var textAreaText = '';
    } else {
      var month = this.state.entry.month;
      var day = this.state.entry.day;
      var year = this.state.entry.year;
      var formMethod = 'PUT';
      var formAction = `/api/entries/${this.state.entry.id}/edit`;
      // var textAreaText = this.state.entry.text
    }

    console.log(this.state)

    return (
      <div className="jumbotron">
        <div className="container">
          <h3>{month}/{day}/{year}</h3>
          <form method="POST" action={formAction}>

            <div className="form-group">
              <textarea className="form-control" id="exampleTextarea" name="text" rows="15" value={this.state.value}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>

          </form>
        </div>
      </div>
    )
  }
}

export default Textbox

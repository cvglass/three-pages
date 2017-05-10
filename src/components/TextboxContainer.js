import Textbox from './Textbox';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    // entry: state.currentEntry,
    id: ownProps.match.params.id
  }
}

export default withRouter(connect(mapStateToProps)(Textbox))

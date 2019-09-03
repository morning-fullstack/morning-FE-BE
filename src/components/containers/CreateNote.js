import { connect } from 'react-redux';
import AddNote from '../AddNote/AddNote';
import { createNote } from '../../actions/notesActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(title, body) {
    dispatch(createNote(title, body));
  }
});

export default connect(null, mapDispatchToProps)(AddNote);

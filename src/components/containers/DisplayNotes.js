import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notes from '../Notes/Notes';
import { getNotes } from '../../selectors/notesSelectors';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/notesActions';

class DisplayNotes extends Component {
  static propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })).isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes } = this.props;
    console.log(notes);
    return (
      <ul>
        <Notes notes={notes}/>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  notes: getNotes(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNotes);

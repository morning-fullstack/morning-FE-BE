import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notes }) {
  const notesArray = notes.map((note, i) => {
    return (
      <section key={i}>
        <Note  title={note.title} body={note.body}/>
      </section>
    );
  });

  return (
    <ul>
      {notesArray}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;

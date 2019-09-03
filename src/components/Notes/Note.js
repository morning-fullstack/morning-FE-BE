import React from 'react';
import Proptypes from 'prop-types';

function Note({ title, body }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
}

Note.propTypes = {
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired
};

export default Note;

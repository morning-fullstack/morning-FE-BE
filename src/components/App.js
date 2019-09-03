import React from 'react';
import DisplayNotes from './containers/DisplayNotes';
import CreateNote from './containers/CreateNote';

export default function App() {
  return (
    <>
      <CreateNote/>
      <DisplayNotes/>
    </>
  );
}

import { getAllNotes, postNote } from '../services/notesApi';

export const FETCH_NOTES = 'FETCH_NOTE';
export const fetchNotes = () => ({
  type: FETCH_NOTES,
  payload: getAllNotes() 
});

export const CREATE_NOTE = 'CREATE_NOTE';
export const createNote = (title, body) => ({
  type: CREATE_NOTE,
  payload: postNote({ title, body })
});

import { FETCH_NOTES, CREATE_NOTE } from '../actions/notesActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  console.log(action.payload);
  switch(action.type) {
    case FETCH_NOTES:
      return [...state, ...action.payload];
    case CREATE_NOTE:
      return [...state, action.payload];
    default:
      return state;

  }
}

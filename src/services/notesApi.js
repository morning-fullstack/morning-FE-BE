export const getAllNotes = () => {
  return fetch('https://notes-morning.herokuapp.com/api/v1/notes')
    .then(res => {
      if(!res.ok) throw 'Sadly, I cannot deliver the notes you so desire.';
      return res.json();
    });
};

export const postNote = ({ title, body }) => {
  return fetch('https://notes-morning.herokuapp.com/api/v1/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body }),
  })
    .then(res => {
      if(!res.ok) {
        console.log('nay'); 
      } 
      return res.json();
    });
};



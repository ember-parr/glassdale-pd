/* 
    hold on to array of notes
    should useNotes that makes a copy of the array of notes and returns a not
    we'll want something to get all of the notes from our database
    we need to be able to add a note to the database as well.... maybe.... hopefully?
*/

export const saveNote = (noteObj) => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteObj),
  }).then((result) => {
    console.log("saveNote worked, fuck yeah!");
  });
};

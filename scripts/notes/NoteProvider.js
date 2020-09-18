/* 
    hold on to array of notes
    should useNotes that makes a copy of the array of notes and returns a not
    we'll want something to get all of the notes from our database
    we need to be able to add a note to the database as well.... maybe.... hopefully?
*/

//code below coppied from chapter 7 of instruction matterial
const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged");

  eventHub.dispatchEvent(noteStateChangedEvent);
};

let notes = [];

export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then((response) => response.json())
    .then((parsedNotes) => {
      notes = parsedNotes;
    });
};

export const useNotes = () => {
  return notes.slice();
};

//code below was written along with brenda instruction
export const saveNote = (noteObj) => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteObj),
  })
    .then(() => {
      return getNotes()
    })
    .then(dispatchStateChangeEvent);
};



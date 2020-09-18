/*
    List of notes goes here... 
*/
import { getNotes, useNotes } from "./NoteProvider.js";
import { NotesHTML } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const domElement = document.querySelector(".notesList")
const eventHub = document.querySelector(".container");

export const NotesList = () => {
  getNotes()
  .then(getCriminals)
  .then(() => {
    const notes = useNotes();
    const suspects = useCriminals();
    render(notes, suspects);
  });
};

eventHub.addEventListener("noteStateChanged", () => {
  const newNotes = useNotes()
  render(newNotes, useCriminals())
})

const render = (notesCollection, suspects) => {
  domElement.innerHTML = notesCollection.map((noteObject)=> {
    noteObject.suspectObj = suspects.find(suspect => {
      return suspect.id === noteObject.suspect
    })
    return NotesHTML (noteObject)
  }) 
  .join("")
};

const deleteNote = (noteId) => {
  return fetch(`http://localhost:8088/notes/${noteId}`, {
      method: "DELETE"
  })
      .then(getNotes)
}

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")

      /*
          Invoke the function that performs the delete operation.

          Once the operation is complete you should THEN invoke
          useNotes() and render the note list again.
      */
     deleteNote(id).then(
         () => {
             const updatedNotes = useNotes()
             const criminals = useCriminals()
             render(updatedNotes, criminals)
         }
     )
  }
})

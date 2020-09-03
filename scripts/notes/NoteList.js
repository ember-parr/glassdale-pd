/*
    List of notes goes here... 
*/
import { getNotes, useNotes } from "./NoteProvider.js";
import { NotesHTML } from "./Note.js";

let notesArray = [];

export const NotesList = () => {
  getNotes().then(() => {
    notesArray = useNotes();
    addNotesToDom(notesArray);
  });
};

const addNotesToDom = (anArrayOfNotes) => {
  const domElement = document.querySelector(".notesList");

  let HTMLRender = anArrayOfNotes.map((singleNote) => {
    return NotesHTML(singleNote);
  });

  domElement.innerHTML = HTMLRender.join("");
};

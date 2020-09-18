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

//below this line i am trying to make a filter for suspects in the notes list

const render = (notesCollection, suspects) => {
  domElement.innerHTML = notesCollection.map((noteObject)=> {
    noteObject.suspectObj = suspects.find(suspect => {
      return suspect.id === noteObject.suspect
    })
    return NotesHTML (noteObject)
  }) 
  .join("")
};

// const eventHub = document.querySelector("#asideForNotes");

// eventHub.addEventListener("change", (event) => {
//   if (event.target.id === "asideForNotes") {
//     const customEvent = new CustomEvent("suspectChosen", {
//       detail: {
//         suspectThatWasChosen: event.target.value,
//       },
//     });
//     console.log("suspect chosen: ", customEvent.detail.suspectThatWasChosen);
//     eventHub.dispatchEvent(customEvent);
//   }
// });

// let suspectThatWasSelected;
// eventHub.addEventListener("suspectChosen", (event) => {
//   suspectThatWasSelected = event.detail.suspectThatWasChosen;
//   if (event.detail.suspectThatWasChosen !== "0") {
//     const matchingSuspect = notesArray.filter((currentNote) => {
//       return currentNote.suspect === event.detail.suspectThatWasChosen;
//     });
//     addNotesToDom(matchingSuspect);
//   } else if (event.detail.suspectThatWasChosen === "0") {
//     addNotesToDom(notesArray);
//   } else {
//     console.log("error with eventHub line 62 and beyond");
//   }
// });

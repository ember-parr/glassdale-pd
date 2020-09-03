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
    render(notesArray);
  });
};

const addNotesToDom = (anArrayOfNotes) => {
  const domElement = document.querySelector(".notesList");

  let HTMLRender = anArrayOfNotes.map((singleNote) => {
    return NotesHTML(singleNote);
  });

  domElement.innerHTML = HTMLRender.join("");
};

//below this line i am trying to make a filter for suspects in the notes list

const contentTarget = document.querySelector(".filters__notes");

const render = (notesCollection) => {
  const suspectNames = notesCollection.map((noteObj) => {
    let suspectNameInArray = noteObj.suspect;
    return suspectNameInArray;
  });
  const sortedArray = suspectNames.sort();
  contentTarget.innerHTML = `
            <select class="dropdown" id="asideForNotes">
                <option value="0">Filter Notes by Suspect...</option>
                ${sortedArray.map((suspectStr) => {
                  return `<option>${suspectStr}</option>`;
                })}
            </select>
        `;
};

const eventHub = document.querySelector("#asideForNotes");

eventHub.addEventListener("change", (event) => {
  if (event.target.id === "asideForNotes") {
    const customEvent = new CustomEvent("suspectChosen", {
      detail: {
        suspectThatWasChosen: event.target.value,
      },
    });
    console.log("suspect chosen: ", customEvent.detail.suspectThatWasChosen);
    eventHub.dispatchEvent(customEvent);
  }
});

let suspectThatWasSelected;
eventHub.addEventListener("suspectChosen", (event) => {
  suspectThatWasSelected = event.detail.suspectThatWasChosen;
  if (event.detail.suspectThatWasChosen !== "0") {
    const matchingSuspect = notesArray.filter((currentNote) => {
      return currentNote.suspect === event.detail.suspectThatWasChosen;
    });
    addNotesToDom(matchingSuspect);
  } else if (event.detail.suspectThatWasChosen === "0") {
    addNotesToDom(notesArray);
  } else {
    console.log("error with eventHub line 62 and beyond");
  }
});

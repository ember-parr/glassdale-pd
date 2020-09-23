export const NotesHTML = (noteObj) => {
  return `
    <section class="card-note" id="note--${noteObj.id}">
        <p>${noteObj.noteText}</p>
        <p class="suspect">Suspect: ${noteObj.suspectObj.name}</p>
        <p class="caption">Date: ${new Date(noteObj.date).toLocaleDateString(
          "en-US"
        )}</p>
        <div id="editNoteBox--${noteObj.id}"></div>
        <button id="editNote--${noteObj.id}--${noteObj.suspect}">Edit</button> 
        <button id="deleteNote--${noteObj.id}">Delete</button>
    </section>
    `;
};

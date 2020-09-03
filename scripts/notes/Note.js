export const NotesHTML = (noteObj) => {
  return `
  
    <section class="listOfNotes">
        <p>${noteObj.noteText}</p>
        <p class="suspect">Suspect: ${noteObj.suspect}</p>
        <p class="caption">Date: ${new Date(noteObj.date).toLocaleDateString(
          "en-US"
        )}</p>
    </section>
    `;
};

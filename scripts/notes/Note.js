export const NotesHTML = (noteObj) => {
  return `
  
    <section class="card-note">
        <p>${noteObj.noteText}</p>
        <p class="suspect">Suspect: ${noteObj.suspectObj.name}</p>
        <p class="caption">Date: ${new Date(noteObj.date).toLocaleDateString(
          "en-US"
        )}</p>
    </section>
    `;
};

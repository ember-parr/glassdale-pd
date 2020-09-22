import { editNote, getSingleNote, saveNote, useNotes } from './NoteProvider.js'


const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("saveNote--")) {
        const [prefix, id, suspect] = event.target.id.split("--");
        console.log("id: ", id, "suspect: ", suspect);
        console.log()
        const updatedNote = {
            noteText: document.querySelector(`#input-note--${id}`).value,
            suspect: parseInt(suspect),
            date: Date.now(),
        }
        editNote(updatedNote, parseInt(id))
    }
})


export const EditNoteForm = (noteId, susId) => {
    const note = getSingleNote(parseInt(noteId))
    .then((response)=> {
        document.querySelector(`#editNoteBox--${noteId}`).innerHTML = `
        <input type="hidden" value="${response.noteId}" id="edit--Note">
        <input id="input-note--${noteId}" value=""/>
        <button id="saveNote--${noteId}--${susId}">Save</button>
        `
    })
}
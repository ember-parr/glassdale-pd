import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

/*
A bunch of input boxes related to the note information 
*/
const contentTarget = document.querySelector("#noteFormContainer");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    const noteContent = document.querySelector("#noteForm--text");
    const noteCriminal = document.querySelector("#noteForm--criminal");

    const newNote = {
      noteText: noteContent.value,
      suspect: noteCriminal.value,
      date: Date.now(),
    };
  }
});

const render = (criminalArray) => {
  const criminalNames = criminalArray.map((criminalObj) => {
    let criminalNameInArray = criminalObj.name;
    return criminalNameInArray;
  });
  const sortedArray = criminalNames.sort();
  contentTarget.innerHTML = `
        <h3>Add A New Note: </h3>
        <form>
        <label for="noteForm--text">Note Info:</label><br>
        <textarea id="noteForm--text" placeholder="Type Here"></textarea><br>
        <select class="dropdown" id="noteForm--criminal">
                <option value="0">Please select a criminal</option>
                ${sortedArray
                  .map((criminalObject) => {
                    return `<option value="${criminalObject}">${criminalObject}</option>`;
                  })
                  .join("")}
            </select>


        </form>

        <button id="saveNote">Save Note</button>
    `;
};

/*
    get the criminals, then envoke render passing it the result of useCriminals, 
    then up above in the const render, we give it that array
*/

export const NoteForm = () => {
  getCriminals().then(() => {
    render(useCriminals());
  });
};

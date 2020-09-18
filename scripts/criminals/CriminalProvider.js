let criminals = [];

export const useCriminals = () => {
  return criminals.slice();
};

export const getCriminals = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then((response) => response.json())
    .then((parsedCriminals) => {
      criminals = parsedCriminals;
    });
};


const deleteNote = (noteId) => {
  return fetch(`http://localhost:8088/notes/${noteId}`, {
      method: "DELETE"
  })
      .then(getNotes)
}
import { CriminalList } from "./criminals/CriminalList.js";
import { OfficersList } from "./officers/OfficerList.js";
import { CrimesList } from "./convictions/ConvictionSelect.js";
import { NoteForm } from "./notes/NoteForm.js";
import { NotesList } from "./notes/NoteList.js";

CriminalList();
CrimesList();
OfficersList();
NoteForm();
NotesList();

window.onload = function () {
  document.querySelector(".filters__officer").style.display = "none";
};

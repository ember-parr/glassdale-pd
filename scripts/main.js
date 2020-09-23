import { CriminalList } from "./criminals/CriminalList.js";
import { OfficersList } from "./officers/OfficerList.js";
import { CrimesList } from "./convictions/ConvictionSelect.js";
import { NoteForm } from "./notes/NoteForm.js";
import { NotesList } from "./notes/NoteList.js";
import { AlibiList } from "./witnesses/AlibiList.js";
import { FacilityList } from "./facility/FacilityList.js";

CriminalList();
CrimesList();
OfficersList();
NoteForm();
NotesList();
AlibiList();
FacilityList();

window.onload = function () {
  document.querySelector(".alibiContainer").style.display = "none";
  document.querySelector(".facilityContainer").style.display="none";
};

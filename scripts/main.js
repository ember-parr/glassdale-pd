import { CriminalList } from "./criminals/CriminalList.js";
// import { OfficerList } from "./officers/OfficerList.js";

import { CrimesList } from "./convictions/ConvictionSelect.js";

const elementPicker = document.querySelector("#listOfConvictions");

CriminalList();
elementPicker.innerHTML += CrimesList();

import { CriminalList } from "./criminals/CriminalList.js";
import { OfficersList } from "./officers/OfficerList.js";

import { CrimesList } from "./convictions/ConvictionSelect.js";

const elementPicker = document.querySelector("#listOfConvictions");

CriminalList();
CrimesList();
OfficersList();

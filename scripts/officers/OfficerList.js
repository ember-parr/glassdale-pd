import { OfficerHTML } from "./Officer.js";
import { useOfficers, getOfficers } from "./OfficerProvider.js";

export const OfficerList = () => {
  getOfficers().then(() => {
    const officerArray = useOfficers();
    console.log("Officer array - ", officerArray);
    addOfficersToDOM(officerArray);
  });
};

const addOfficersToDOM = (anOfficerArray) => {
  const domElement = document.querySelector(".filters__officer");

  let HTMLArray = anOfficerArray.map((singleOfficer) => {
    return OfficerHTML(singleOfficer);
  });

  console.log("html array= ", HTMLArray);

  domElement.innerHTML = HTMLArray.join("");
};

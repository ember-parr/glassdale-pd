import { CriminalHTML, CriminalAlibiHTML } from "./Criminals.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";

let criminalArray = [];

export const CriminalList = () => {
  getCriminals().then(() => {
    criminalArray = useCriminals();
    // console.log("criminal array: ", criminalArray);
    addCriminalToDom(criminalArray);
  });
};

//add all the criminals to the dom
const addCriminalToDom = (aCriminalArray) => {
  const domElemenet = document.querySelector(".criminalsContainer");
  let HTMLArray = aCriminalArray.map((singleCriminal) => {
    return CriminalHTML(singleCriminal);
  });
  domElemenet.innerHTML = HTMLArray.join("");
};

//add alibi to their card
const addAlibiToDom = (knownAssociates, id) => {
  const placeOnDom = document.getElementById("knownAssociates--" + id);
  const theButton = document.getElementById("associates--" + id);
  let HTMLArray = knownAssociates.map((singleAssociate) => {
    return CriminalAlibiHTML(singleAssociate);
  });
  placeOnDom.innerHTML = HTMLArray.join("");
  theButton.style.display = "none";
};

//start of event hubs
const eventHub = document.querySelector(".container");
let crimeThatWasSelected;

eventHub.addEventListener("crimeChosen", (event) => {
  crimeThatWasSelected = event.detail.crimeThatWasChosen;
  if (event.detail.crimeThatWasChosen !== "0") {
    const matchingCriminals = criminalArray.filter((currentCriminal) => {
      return currentCriminal.conviction === event.detail.crimeThatWasChosen;
    });
    console.log("Matching Criminals: ", matchingCriminals);
    addCriminalToDom(matchingCriminals);
    document.querySelector(".filters__officer").style.display = "block";
  }
});

eventHub.addEventListener("officerChosen", (event) => {
  if (event.detail.officerThatWasChosen !== "0") {
    const matchingCriminals = criminalArray.filter((currentCriminal) => {
      return (
        currentCriminal.arrestingOfficer ===
          event.detail.officerThatWasChosen &&
        currentCriminal.conviction === crimeThatWasSelected
      );
    });
    addCriminalToDom(matchingCriminals);
  }
});

// show the damn known associates!
let found = [];
let foundAssociates = [];
let idToLocate;
eventHub.addEventListener("click", (event) => {
  if (event.target.class === "criminalsContainer") {
    const [prefix, criminalId] = event.target.id.split("--");
    found = criminalArray.find((criminal) => criminal.id == criminalId);
    foundAssociates = found.known_associates;
    idToLocate = found.id;
    console.table(found.known_associates);
    addAlibiToDom(foundAssociates, idToLocate);
  } else {
    console.log("this isn't working....");
  }
});

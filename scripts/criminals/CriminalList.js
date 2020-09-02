import { CriminalHTML } from "./Criminals.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";

let criminalArray = [];

export const CriminalList = () => {
  getCriminals().then(() => {
    criminalArray = useCriminals();
    // console.log("criminal array: ", criminalArray);
    addCriminalToDom(criminalArray);
  });
};

const addCriminalToDom = (aCriminalArray) => {
  const domElemenet = document.querySelector(".criminalsContainer");

  let HTMLArray = aCriminalArray.map((singleCriminal) => {
    return CriminalHTML(singleCriminal);
  });

  domElemenet.innerHTML = HTMLArray.join("");
};

const eventHub = document.querySelector(".container");
let crimeThatWasSelected;

eventHub.addEventListener("crimeChosen", (event) => {
  crimeThatWasSelected = event.detail.crimeThatWasChosen;
  if (event.detail.crimeThatWasChosen !== "0") {
    const matchingCriminals = criminalArray.filter((currentCriminal) => {
      return currentCriminal.conviction === event.detail.crimeThatWasChosen;
    });
    addCriminalToDom(matchingCriminals);
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

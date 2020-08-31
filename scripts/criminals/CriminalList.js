import { CriminalHTML } from "./Criminals.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";

export const CriminalList = () => {
  getCriminals().then(() => {
    const criminalArray = useCriminals();
    console.log("criminal array: ", criminalArray);
    addCriminalToDom(criminalArray);
  });
};

const addCriminalToDom = (aCriminalArray) => {
  const domElemenet = document.querySelector(".criminalsContainer");

  let HTMLArray = aCriminalArray.map((singleCriminal) => {
    return CriminalHTML(singleCriminal);
  });

  console.log("html array of criminals= ", HTMLArray);

  domElemenet.innerHTML = HTMLArray.join("");
};

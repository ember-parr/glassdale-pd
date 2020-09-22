import { CriminalHTML, CriminalAlibiHTML } from "./Criminals.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

let criminals = [];
let facilities;
let crimFac;

export const CriminalList = () => {
  // Kick off the fetching of both collections of data
  
  getFacilities()
  .then(getCriminals())
  .then(getCriminalFacilities)
  .then(
      () => {
          // Pull in the data now that it has been fetched
          facilities = useFacilities()
          crimFac = useCriminalFacilities()
          criminals = useCriminals()

          // Pass all three collections of data to render()
          render(criminals, facilities, crimFac)
      }
  )
  console.log("criminals: ", criminals)
};

const contentTarget = document.querySelector(".criminalsContainer");

//add all the criminals to the dom
const render = (criminalsToRender, allFacilities, allRelationships) => {
  contentTarget.innerHTML = criminalsToRender.map(
      (criminalObject) => {
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })
          return CriminalHTML(criminalObject, facilities)
      }
  ).join("")
}



//start of event hubs
const eventHub = document.querySelector(".container");
let crimeThatWasSelected;

eventHub.addEventListener("crimeChosen", (event) => {
  crimeThatWasSelected = event.detail.crimeThatWasChosen;
  if (event.detail.crimeThatWasChosen !== "0") {
    const matchingCriminals = criminals.filter((currentCriminal) => {
      return currentCriminal.conviction === event.detail.crimeThatWasChosen;
    });
    console.log("Matching Criminals: ", matchingCriminals);
    render(matchingCriminals, facilities, crimFac);
    document.querySelector(".filters__officer").value = "0";
  }
});

eventHub.addEventListener("officerChosen", (event) => {
  if (event.detail.officerThatWasChosen !== "0") {
    const matchingCriminals = criminals.filter((currentCriminal) => {
      return (
        currentCriminal.arrestingOfficer ===
          event.detail.officerThatWasChosen
      );
    });
    render(matchingCriminals, facilities, crimFac);
  }
});

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

// show the damn known associates!

eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("associates--")) {
    const [prefix, criminalId] = event.target.id.split("--");
    let found = criminals.find((criminal) => criminal.id == criminalId);
    let foundAssociates = found.known_associates;
    let idToLocate = found.id;
    console.table(found.known_associates);
    addAlibiToDom(foundAssociates, idToLocate);
  }
});

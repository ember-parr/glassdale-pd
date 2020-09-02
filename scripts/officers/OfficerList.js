import { useOfficers, getOfficers } from "./OfficerProvider.js";

// export const OfficerList = () => {
//   getOfficers().then(() => {
//     const officerArray = useOfficers();
//     console.log("Officer array - ", officerArray);
//     addOfficersToDOM(officerArray);
//   });
// };

// const addOfficersToDOM = (anOfficerArray) => {
//   const domElement = document.querySelector(".filters__officer");

//   let HTMLArray = anOfficerArray.map((singleOfficer) => {
//     return OfficerHTML(singleOfficer);
//   });

//   console.log("html array= ", HTMLArray);

//   domElement.innerHTML = HTMLArray.join("");
// };

const contentTarget = document.querySelector(".filters__officer");

export const OfficersList = () => {
  getOfficers().then(() => {
    const officersArray = useOfficers();
    render(officersArray);
  });
};

const render = (officersCollection) => {
  const officerName = officersCollection.map((officerObj) => {
    let officerNameinArray = officerObj.name;
    return officerNameinArray;
  });
  const sortedArray = officerName.sort();
  contentTarget.innerHTML = `
    <select class="dropdown" id = "officerSelect">
    <option value=0> Please select an officer...</option>
    ${sortedArray.map((officerString) => {
      return `<option>${officerString}</option>`;
    })}
    </select>
  `;
};

const eventHub = document.querySelector(".container");

eventHub.addEventListener("change", (event) => {
  if (event.target.id === "officerSelect") {
    const customEvent = new CustomEvent("officerChosen", {
      detail: {
        officerThatWasChosen: event.target.value,
      },
    });
    console.log("officer chosen: ", customEvent.detail.officerThatWasChosen);
    eventHub.dispatchEvent(customEvent);
  }
});

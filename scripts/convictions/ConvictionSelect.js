import { getConvictions, useConvictions } from "./ConvictionProvider.js";

// my way of doing the assignment:

// export const CrimesList = (taco) => {
//   getConvictions().then(() => {
//     let select = document.querySelector("#listOfConvictions");
//     let options = [];
//     let option = document.createElement("option");
//     let allCrimes = useConvictions();
//     console.log("all crimes ", allCrimes);
//     for (const singleCrime of allCrimes) {
//       option.text = option.value = `${singleCrime.name}`;
//       options.push(option.outerHTML);
//     }
//     select.insertAdjacentHTML(`beforeEnd`, options.join("/n"));
//   });
// };

//  following instructions for the assignment:

const contentTarget = document.querySelector(".filters__crime");

export const CrimesList = () => {
  getConvictions().then(() => {
    const convictionsArray = useConvictions();
    render(convictionsArray);
  });
};
const render = (convictionsCollection) => {
  const crimeNames = convictionsCollection.map((crimeObj) => {
    let crimeNameInArray = crimeObj.name;
    return crimeNameInArray;
  });
  const sortedArray = crimeNames.sort();
  contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${sortedArray.map((crimeStr) => {
                  return `<option>${crimeStr}</option>`;
                })}
            </select>
        `;
};

const eventHub = document.querySelector(".container");

eventHub.addEventListener("change", (event) => {
  if (event.target.id === "crimeSelect") {
    const customEvent = new CustomEvent("crimeChosen", {
      detail: {
        crimeThatWasChosen: event.target.value,
      },
    });
    console.log("crime chosen: ", customEvent.detail.crimeThatWasChosen);
    eventHub.dispatchEvent(customEvent);
  }
});

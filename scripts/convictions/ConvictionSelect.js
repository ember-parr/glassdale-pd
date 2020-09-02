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

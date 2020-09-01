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
export let selectedCrime = "";

export const CrimesList = (taco) => {
  getConvictions().then(() => {
    let contentTarget = document.querySelector("#listOfConvictions");
    const convictions = useConvictions();
    const render = (convictionsCollection) => {
      contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map((singleCrime) => {
                  return `<option value="${singleCrime.name}">${singleCrime.name}</option>`;
                })}
            </select>
        `;
      selectedCrime = document.querySelector("option.value");
    };
    render(convictions);
  });
};

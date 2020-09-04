export const CriminalHTML = (criminalObj) => {
  const placeCriminalOnDom = `
    <section id="criminal-${criminalObj.id}" class="card-criminal">
        <h3>${criminalObj.name}</h3>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction}</p>
        <p>Term start: ${new Date(
          criminalObj.incarceration.start
        ).toLocaleDateString("en-US")}</p>
        <p>Term end: ${new Date(
          criminalObj.incarceration.end
        ).toLocaleDateString("en-US")}</p>
        <p>Arresting Officer: ${criminalObj.arrestingOfficer}</p>
        <button class="knownAssociatesBtn" id="associates--${
          criminalObj.id
        }">Associate Alibis</button>
        <section id="knownAssociates--${criminalObj.id}">
        </section>
        </section>
        `;

  return placeCriminalOnDom;
};

// const eventHub = document.querySelector(".criminalsContainer");
// let knownAssociates = [];

// eventHub.addEventListener("click", (event) => {
//   if (event.target.id.startsWith("associates--")) {
//     const [prefix, criminalName] = event.target.id.split("--");
//     const customevent = new CustomEvent("alibiClicked", {
//       detail: {
//         nameOfCriminalClicked: criminalName,
//       },
//     });
//     console.log("name of criminal clicked: ", criminalName);
//     eventHub.dispatchEvent(customevent);
//   }
// });

export const CriminalAlibiHTML = (associateObj) => {
  const placeCriminalOnDom = `
          <h5>Known Associate: ${associateObj.name}</h5>
          <p>Alibi Provided: ${associateObj.alibi}</p>
          <hr>
        `;

  return placeCriminalOnDom;
};

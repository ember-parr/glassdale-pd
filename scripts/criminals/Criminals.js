export const CriminalHTML = (criminalObj, facilities) => {
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
        <div>
          <h4>Facilities</h4>
          <ul>
            ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
          </ul>
        </div>
        <button class="knownAssociatesBtn" id="associates--${
          criminalObj.id
        }">Associate Alibis</button>
        <section id="knownAssociates--${criminalObj.id}">
        </section>
        </section>
        `;

  return placeCriminalOnDom;
};

export const CriminalAlibiHTML = (associateObj) => {
  const placeCriminalOnDom = `
          <h5>Known Associate: ${associateObj.name}</h5>
          <p>Alibi Provided: ${associateObj.alibi}</p>
          <hr>
        `;

  return placeCriminalOnDom;
};

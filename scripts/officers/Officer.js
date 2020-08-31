export const OfficerHTML = (officerObj) => {
  return `
      <section id="officer-${officerObj.id}" class="card-officer"> 
          <h2>${officerObj.name}</h2>
      </section>
      `;
};

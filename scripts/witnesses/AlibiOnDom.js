export const AlibiHTML = (alibiObj) => {
  const placeAlibiOnDom = `
        <div id="witness--${alibiObj.id}" class="card-alibi">
            <h4>${alibiObj.name}'s Statement:</h2>
            <p>${alibiObj.statements}.</p>
        </div>
    `;
  return placeAlibiOnDom;
};

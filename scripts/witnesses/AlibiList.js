import { AlibiHTML } from "./AlibiOnDom.js";
import { useWitnesses, getWitnesses } from "./WitnessProvider.js";

let alibiArray = [];
const eventHub = document.querySelector(".container");

export const AlibiList = () => {
  getWitnesses().then(() => {
    alibiArray = useWitnesses();
    addAllAlibisToDom(alibiArray);
    render(alibiArray);
  });
};

const addAllAlibisToDom = (anArrayOfAlibis) => {
  const domElement = document.querySelector(".alibiContainer");
  let HTMLRender = anArrayOfAlibis.map((singleAlibi) => {
    return AlibiHTML(singleAlibi);
  });
  domElement.innerHTML = HTMLRender.join("");
};

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "showAlibiButton") {
    if (document.querySelector(".alibiContainer").style.display === "none") {
      document.querySelector(".alibiContainer").style.display = "block";
      document.querySelector("#showAlibiButton").innerHTML = "Hide Alibi List";
    } else if (
      document.querySelector(".alibiContainer").style.display === "block"
    ) {
      document.querySelector(".alibiContainer").style.display = "none";
      document.querySelector("#showAlibiButton").innerHTML = "Show Alibi List";
    } else {
      console.log("You have an issue in alibilist js file");
    }
  }
});

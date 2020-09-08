import { AlibiHTML } from "./AlibiOnDom.js";
import { useWitnesses, getWitnesses } from "./WitnessProvider.js";

let alibiArray = [];

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

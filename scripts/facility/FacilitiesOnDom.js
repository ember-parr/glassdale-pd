import {useCriminalFacilities, getCriminalFacilities } from "./CriminalFacilityProvider.js"
import {getCriminals, useCriminals} from '../criminals/CriminalProvider.js'
import { CriminalList } from "../criminals/CriminalList.js";

let criminals = [];

const criminalListToMap = () => {
    getCriminals()
    .then(()=> {
        criminals = useCriminals();
        // console.log("criminals from dom js: ", criminals)
    })
        return criminals
    
}

const findCorrectCriminals = () => {
    // maybe send a parameter from facHTML to CrimListToMap and then send a param from there to this function? idfk this is hard 
}


export const FacilityHTML = (facilityObj, criminalArray) => {
    let allCriminals = criminalListToMap();
    console.log("all criminals after function run: ", allCriminals)
    // console.log("matching crims from html element: ", criminalArray)
    let criminalsInFacility = [];
    // criminalsInFacility = criminalArray.map( chosenCriminal => {
    //     const matchingCriminals = allCriminals.filter(criminal => criminal.id === chosenCriminal.id)
    //     return criminalsInFacility.push(matchingCriminals)
    // })
    // console.log("find matching criminals: ", criminalsInFacility)
    const placeFacilitiesOnDom = `
    <div class="card-facility">     
    <h4>${facilityObj.facilityName}</h4>
    <p>Security Level: ${facilityObj.securityLevel}</p>
    <p>Capacity: ${facilityObj.capacity}</p>
    <h5>Criminals:</p>
    <ul>
    </ul>
    </div>
    `;
    return placeFacilitiesOnDom;
};
// ${criminalsInFacility.map(c => `<li>${c}</li>`).join("")}
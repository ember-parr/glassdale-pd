import {useCriminalFacilities, getCriminalFacilities } from "./CriminalFacilityProvider.js"
import {getCriminals, useCriminals} from '../criminals/CriminalProvider.js'
import { CriminalList } from "../criminals/CriminalList.js";
 


const criminalListToMap = (criminalFacilityArray) => {
    let criminals = [];
    getCriminals()
    .then(()=> {
        criminals = useCriminals();
        let criminalList = criminalFacilityArray.map(cf => {
            const matchingCriminalObjects = criminals.find(criminal => criminal.id === cf.criminalId)
            return matchingCriminalObjects
        })
        return criminalList
    })
            
}

const findCorrectCriminals = () => {
    // maybe send a parameter from facHTML to CrimListToMap and then send a param from there to this function? idfk this is hard 
}


export const FacilityHTML = (facilityObj, criminalArray) => {
    let mappedCriminals = criminalListToMap(criminalArray)
    console.log("mapped criminal's: ", criminalArray)
    const placeFacilitiesOnDom = `
    <div class="card-facility">     
    <h4>${facilityObj.facilityName}</h4>
    <p>Security Level: ${facilityObj.securityLevel}</p>
    <p>Capacity: ${facilityObj.capacity}</p>
    <h5>Criminals:</p>
    <ul>
        ${criminalArray.map(cN => `<li>${cN.criminal.name}`)}
    </ul>
    </div>
    `;
    return placeFacilitiesOnDom;
};

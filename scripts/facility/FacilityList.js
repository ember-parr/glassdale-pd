import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";
import {FacilityHTML} from "./FacilitiesOnDom.js";
import { useFacilities, getFacilities } from "./FacilityProvider.js";

let allCrimFac = []


let facilityArray = [];
const eventHub = document.querySelector(".container");

export const FacilityList = () => {
    getFacilities()
    .then(getCriminalFacilities)
    .then(() => {
        allCrimFac = useCriminalFacilities();
        facilityArray = useFacilities();
        addFacilitiesToDom(facilityArray);
    });
};

const addFacilitiesToDom = (anArrayOfFacilities) => {
    const contentElement = document.querySelector(".facilityContainer");
    let HTMLRender = anArrayOfFacilities.map((singleFacility)=> {
        let matchingCriminalsInFacility = allCrimFac.filter(facility=> facility.facilityId === singleFacility.id)
        console.log("matching Criminals In Facility: ", matchingCriminalsInFacility)
        return FacilityHTML(singleFacility, matchingCriminalsInFacility);
    });
    contentElement.innerHTML=HTMLRender.join("");
};

eventHub.addEventListener("click", (event) => {
    if(event.target.id=== "facility__button") {
        if(document.querySelector(".facilityContainer").style.display === "none") {
            document.querySelector(".facilityContainer").style.display = "flex";
            document.querySelector("#facility__button").innerHTML = "Hide Facilities";
            document.querySelector(".criminalsContainer").style.display = "none"
        } else if (document.querySelector(".facilityContainer").style.display === "flex") {
            document.querySelector(".facilityContainer").style.display = "none";
            document.querySelector("#facility__button").innerHTML = "List Facilities";
            document.querySelector(".criminalsContainer").style.display = "flex"
        } else {
            console.log("something went wrong with facilitylist event listener")
        }
    }
})
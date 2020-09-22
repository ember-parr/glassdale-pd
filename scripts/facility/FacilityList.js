import {FacilityHTML} from "./FacilitiesOnDom.js";
import { useFacilities, getFacilities } from "./FacilityProvider.js";

let facilityArray = [];
const eventHub = document.querySelector(".container");

export const FacilityList = () => {
    getFacilities().then(() => {
        facilityArray = useFacilities();
        addFacilitiesToDom(facilityArray);
    });
};

const addFacilitiesToDom = (anArrayOfFacilities) => {
    const contentElement = document.querySelector(".facilityContainer");
    let HTMLRender = anArrayOfFacilities.map((singleFacility)=> {
        return FacilityHTML(singleFacility);
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
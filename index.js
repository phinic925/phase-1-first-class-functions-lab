// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    const newArray = drivers.slice(0,2);
    return newArray;
}
function returnLastTwoDrivers (drivers){
    const lastDrivers = drivers.slice(-2);
    return lastDrivers;

}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fare) {
    return fare => fare * fare;
}
const fareDoubler = fare => fare * 2;
 const fareTripler = fare => fare * 3;
 function selectDifferentDrivers(drivers,returnLastTwoDrivers){
     return returnLastTwoDrivers(drivers);

 }
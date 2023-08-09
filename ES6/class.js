// class in ES6 is special type of function with almost all the features
//that OOPS should have

/* class MyClass { //uses class keyword
    constructor() {} // initialize the class object
    method() {} //function to provide behavior that we expect from the class

}
*/
class Vaccination {
    constructor(name, price) {
        this.vaccineName = name
        this.vaccinePrice = price
        this.ScheduleDate = new Date()
    }

    getVaccineDetails = function (availability) {
        return {
            Name : this.vaccineName,
            Price : this.vaccinePrice,
            Available : availability ? "Yes" : "No"
        }
    }

    getSchedule = () => {
        return {
            Name : this.vaccineName,
            Price : this.vaccinePrice,
            Schedule : this.ScheduleDate.toLocaleDateString()
        }
    }

}

let vaccineSlot = new Vaccination("Pfizer", "$100")

console.log(vaccineSlot.getVaccineDetails(true));
console.log(vaccineSlot.getSchedule());
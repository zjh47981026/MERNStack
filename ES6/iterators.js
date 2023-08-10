//noraml iteraotors do not preserves immutability
//new iterators - filter, map, reduce, and some, these
//es6 iterators help us extract information and
//also preserve the immutability

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Batman"}
];

//1. get the list of persons saved by Ironman

let personsSavedByIronMan = personsList.filter((person) => person.savedby === "IronMan");
console.log(personsSavedByIronMan)
console.log(personsList)

//2.get the name list of persons saved by CA, append Mr before the name
//let personsSvdByCA = personsList.map((person) => person.savedby === "CaptainAmerica" ? `Mr. ${person.name}` : "").filter(p => p!="");
let personsSvdByCA = personsList.map((person) => {if (person.savedby === "CaptainAmerica") 
{
    return {"Lucky Person" : `Mr. ${person.name}`}
}else {
    return ""
}}).filter(p => p!="");

console.log(personsSvdByCA);
//console.log(personsList)

//3. If there is someone saved by batman or thor
let anyOneSavedByBatman = personsList.some((person) => person.savedby == "Batman")

console.log(anyOneSavedByBatman)

let anyOneSavedByThor = personsList.some((person) => person.savedby == "Thor");

console.log(anyOneSavedByThor)

//4. get count of uniquely saved persons by each superhero

let uniquelySavedPrsns = personsList.reduce((prevVal, curVal, index, array)=>{
    console.log(prevVal);
    console.log(curVal);
    prevVal[curVal.savedby] = prevVal[curVal.savedby] ? prevVal[curVal.savedby] + 1 : 1;
    return prevVal;
}, new Set())

console.log(uniquelySavedPrsns)
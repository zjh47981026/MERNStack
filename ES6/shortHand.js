
let cat = "Miaow", dog = "Woof", bird = "Chirp", lion = "roar";

let animalSound = {
    cat : cat, 
    dog : dog,
    bird : bird,
    lion : lion
}
console.log("Animal Sounds are " + animalSound);  //object
console.log("Animal Sounds are " + JSON.stringify(animalSound));

let animalSoundES6 = {
    cat,
    dog,
    bird,
    lion
}

console.log("Animal Sound Using short Hand", animalSoundES6);
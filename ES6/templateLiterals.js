// template literals are used to help us create html structure as well as
//string concatenation on the fly
// use tilde ``  - to open close template `<==content(html, string)==>`
//for dynamic variable we use ${variable name};

let animalSoundES6 = require('./shortHand');
let dynVal = 100;
let myNormalString = "Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum" + dynVal + "Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum + Lorem Lipsum" +
                    "<h1>Header</h1>" +
                    "\n Lorem Lipsum Lorem Lipsum \n" 
                    + JSON.stringify(animalSoundES6);

                    console.log(myNormalString);


let template = `Lorem Lipsum Lorem Lipsum Lorem Lipsum +
 Lorem Lipsum Lorem Lipsum" ${dynVal}  Lorem Lipsum
    Lorem Lipsum Lorem Lipsum Lorem Lipsum 
    Lorem Lipsum Lorem Lipsum + Lorem Lipsum 
   <h1>Header</h1> 
   Lorem Lipsum Lorem Lipsum
    ${JSON.stringify(animalSoundES6)}`;

   console.log(template);

var user = {name:"Thahn Le", 
            age : 21 , 
            session:"JavaScript",
            getDetails : function () {
                console.log(`${this.age} ${this.session}`)
                var _this = this; //copying into another object and 
                //use it in the setTimeout function

               /* setTimeout(function() {
                    console.log("inside setTimeout");
                    console.log(`${_this.age} ${_this.session}`)
                }, 2000);  */

                //using bind method  more standard way
                setTimeout(function() {
                    console.log("inside setTimeout");
                    console.log(`${_this.age} ${_this.session}`)
                }.bind(user), 2000); //bind
            }
}

user.getDetails()  //getDetails is executed over user, so context/scope
//is user, but it changes inside setTimeout

//an example on UI, by doing DOM manipulation

//html example
{/* <button id="newBtnBind">Practice Div</button> */}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Mueen"
// }

// btn.removeEventListener("click",this.onclick)


//second example

//<button id=​"newBtnBind">​Practice Bind​</button>​
//var selectBtn = document.getElementById("newBtnBind")
//var info = {"Event" : "Click", "Topic" : "Bind"}

//var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
//selectBtn.addEventListener("click", clickFunc.bind(info), false)

//var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
//selectBtn.addEventListener("click", clickFunc.bind(info2), false)


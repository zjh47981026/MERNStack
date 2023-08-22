// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
//we can use new iterators such as filter, map, reduce, and some to preserve the immutability of my heroes list

const heroes = [
   { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
   { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
   { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
   { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
   { name: 'Batman',         family: 'DC Comics', isEvil: false },
   { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
   { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
   { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
   { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
 ];

 // a. Get heroes who are not evils
 let list1 = heroes.filter(p => p.isEvil == false);
 console.log(list1);

 // b. Print Unique family names
let uniqueNames = heroes.reduce((prevVal, curVal) => {
    prevVal[curVal.family] = prevVal[curVal.family] ? prevVal[curVal.family] + 1 : 1;
    return prevVal;
}, new Set())

console.log(uniqueNames);
// c. Print Hero Names from given objects, and append sir in each of them before printing
let list2 = heroes.map((p) => {
    return `Sir ${p.name}`
});
console.log(list2);

// d. Do we have any hero in Marvel Family who is not evil
let hasNotEvil = heroes.some(p => p.isEvil == false);
console.log(hasNotEvil);
console.log("=============================================================================================")
//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
class Map {
    constructor() {
        this.map = [];
    }
    get = function(key) {
        return this.map.filter(p => p.key === key);
    }

    set = function (key, value) {
        if (this.map.some(p => p.key === key)) {
            let obj = this.map.filter(p => p.key === key);
            obj.value = value;
        } else {
            this.map.push({"key" : key, "value" : value});
        }
    }

    clear = function () {
        this.map.length = 0;
    }
}

const m = new Map();
m.set(0, 1);
console.log(m.map);
m.clear();
console.log(m.map);


class MySet {
    constructor() {
        this.arr = [];
    }
    get = function (value) {
        return this.arr.filter(p => p === value);
    }

    set = function (value) {
        return this.arr.push(value);
    }

    clear = function () {
        this.arr.length = 0;
    }
}

const s = new MySet();
s.set(1);
console.log(...s.arr);

console.log(s.get(1));

s.clear();
console.log(s.arr);
console.log("=============================================================================================")
//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
/* let promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve ({
            "status" : 200
        })
    }, 2000)
    
    setTimeout(()=> {
        reject({
            "status" : 500
        });
    }, 3000)
})

promise.then((data) => {
    console.log("Arrow functino, class, let and const, promise, destructuring");
}).catch((err) => {
    console.log(err);
});

*/

//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

function mult (...arr) {
    let mult = 0;
    mult = arr.reduce((prevVal, curVal) => {
        return prevVal * curVal;
    }, 1);
    return mult;
}
console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3, 4));

let arr2 = ["a", "b", "c", "d"];
console.log(...arr2);

//5. Print the last name through destructuring and add a contact number:9119119110 as well
 let person = {
     userDetails :{
         first: "FirstName",
         last: "LastName"
     }
 }

let {userDetails : {first, last, contact = 9119119110}} = person;
console.log(first);
console.log(last);
console.log(contact);

//6. Give me an example of const data manipulation
const obj = {name : "a", age : 20, salary : 99999};
//obj = {name : "b", age : 22, salary : 10000};
obj.salary = 8888;

console.log(obj.salary);



//7. What is the difference between for-of and for-in show with examples
let p = {name: "a", age : 20, salary : 8888};
for (const key in p) {
    console.log(key);
    console.log(p[key]);
}


let arr3 = [1, 2, 3, 4, 5, 6, 7];
arr3.newNum = 8;
for (const element of arr3) {
    console.log(element);
}
console.log("==========================")
for (const key in arr3) {
    console.log(arr3[key]);
}


//8. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded

const signin = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "msg" : "sign-in successful",
            "status" : 200
        });

    }, 1000);

    setTimeout(() => {
        reject({
            "msg": "sign-in failed", 
            "status" : 500
        })
    }, 2000)
})


const userregistration = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "msg" : "registration: successful",
            "status" : 200
        });

    }, 1000);

    setTimeout(() => {
        reject({
            "msg": "registration: failed", 
            "status" : 500
        })
    }, 2000)
})


const nextpageToNavigate = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "msg" : "nextPageToNavigate: successful",
            "status" : 200
        });

    }, 1000);

    setTimeout(() => {
        reject({
            "msg": "nextPageToNavigate: failed", 
            "status" : 500
        })
    }, 2000)
})

console.log("========================")
Promise.all([signin, userregistration, nextpageToNavigate]).then(() => {
    console.log("move to next Page!")
}).catch((err) => {console.log("err", err)});

//9. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios

Promise.allSettled([signin, userregistration, nextpageToNavigate]).then((data) => {
    if (data[0].status === 200 && data[1].status === 200 && data[2].status === 5000) {
        console.log("move to next page!");
    } 
    if (data[0].status === 200) {
    }
}).catch((err) => {console.log("err", err)});



// Optional -
//10. Using the promise object at #3 create an async and await feature
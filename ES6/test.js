//create an example of account reporting system to generate report at 10 PM
//print user info like - name, address, account number after 3 seconds using async and await
//also check when it rejects 2 seconds 
//analyze how await works as blocking execution



//create one set of map using different types of keys and at least show the 4 functions of (get, set, clear...)
//create a list using set and show the usage of 5 functions (.add, .clear);
let map = new Map();
let keyNum = 1;
let keyObj = {};
let keyFunc = function () {console.log("func")};
let keyString = "abcd";
map.set(keyNum, 'keyNum');
map.set(keyObj, 'keyObj');
map.set(keyFunc, 'keyFunc');
map.set(keyString, 'keyString');

console.log(map.get(keyNum));
console.log(map.get(keyFunc));
console.log(map.values());
console.log(map.entries());
map.delete(keyObj);
console.log(map.entries());
map.clear();
console.log(map.entries());


let set = new Set();
set.add('a');
set.add('b');
set.add('c');
console.log(set.values());
set.add('a');
console.log(set.values());
console.log(set.has('a'));
console.log(set.delete('b'));
console.log(set.values());
set.clear();
console.log(set.values());



//create an example of arithmetic operations (addition, subtraction, multiply, division) using
//generator function 


function *func(num1, num2) {
    yield num1 + num2;

    yield num1 - num2;

    yield num1 * num2;

    yield num1 / num2;

    return;
}

let pointer = func(1, 2);

console.log(pointer);
console.log(pointer.next());
console.log(pointer.next());
console.log(pointer.next());
console.log(pointer.next());

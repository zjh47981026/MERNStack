//if there we see no params can be passed then we set a default param by
//ourselves

function Add(x = 0, y = 0) {
   // console.log(x, y); //NaN-  undefined + undefined 
    return x + y;
}

console.log(Add());
console.log(Add(1))
console.log(Add(2,3))
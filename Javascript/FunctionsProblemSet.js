// function isEven(num) {
//     //return tru if even
//     if(num%2 === 0){
//         console.log("true")
//     }
//     else{
//         console.log("False")
//     }
//     //return false otherwise
// }

function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    var result = 1;
    for (var i=1; i<=num ; i++) {
        result *= i;
    }
return result;
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/g , "_");
  return newStr;
}
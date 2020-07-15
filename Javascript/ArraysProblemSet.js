
console.log("Reverse order")
function reverseorder(arr){
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

reverseorder([1,2,3,4,5])

console.log("Is Uniform")
function isUniform(arr){
var first = arr[0];
for (var i = 1; i < arr.length; i++){
    if(arr[i] !== first){
        return false;
    }
}
return true;
}

//sum array
console.log("sum array")
function sumArray(arr){
var total = 0;
arr.forEach(function(element){
    total += element;
});
return total;
}

//max
console.log("max")
function max(arr){
    var max = arr[0];
    arr.forEach(function(element){
        if(element>max){
            max = element;
        }
    });
    return max;
}

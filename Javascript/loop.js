console.log("Printing all numbers betweeen -10 and 19");
var counter =  -10;
while(counter<20){
    console.log(counter);
    counter ++;
}
console.log("Printing all even numbers betweeen 10 and 40");
 var counter = 10;
 while(counter<40){
     console.log(counter);
     counter +=2;
 }
console.log("Printing all odd numbers betweeen 300 and 330");
 var counter = 300;
 while(counter<=333){
     if(counter % 2 !== 0){
        console.log(counter);
     }
     counter+=1;
 }
console.log("Printing all # divisible by 5 and 3 between 5 and 50");
 var counter = 5;
 while(counter<=50){
     if(counter % 5 === 0 && counter % 3 === 0){
         console.log(counter)
     }
     counter+=1;
 }

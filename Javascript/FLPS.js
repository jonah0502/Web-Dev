console.log ("Printing all # between -10 and 19");

for (var num= -10; num < 20; num += 1)
{
console.log(num);
}
console.log ("Printing all evem # between 10 and 40");
for (var num= 10; num < 42; num += 2)
{
console.log(num);
}
console.log ("Printing all odd # between 300 and 333");
for (var num= 300; num <= 333; num += 1)
{
    if(num % 2 !== 0){
        console.log(num);
    }
}
console.log ("Printing all # divisible by 5 and 3 between 5 and 50");
for (var num= 5; num < 50; num += 1)
{
    if(num % 5 === 0 && num % 3 === 0){
        console.log(num);
    }
}
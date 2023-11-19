const readlineSync=require('readline-sync');
let width=parseInt(readlineSync.question("Please type width : "));
let height=parseInt(readlineSync.question("Please type height: "));
 area=width*height;
console.log("the area of rectangle =",area)
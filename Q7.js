const readlineSync=require('readline-sync');
let num=parseInt(readlineSync.question("Please Type one number to check catagory"));
if (num>0){
    console.log("Your Number is POSSITIVE");

}
else if(num=0){
    console.log("You entered ZERO...");

}
else{
    console.log("Your Number is NEGATIVE")
}
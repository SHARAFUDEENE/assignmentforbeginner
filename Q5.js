const readlineSync=require('readline-sync');
let eligible=18
let age=parseInt(readlineSync.question("Hello,Please type Your Age to check eligiblity to vote..."));

if(age>=eligible){
    console.log("You are eligible")

}
else{
    console.log("You are not eligible");
}

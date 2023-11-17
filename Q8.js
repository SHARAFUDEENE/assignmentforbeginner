const readlineSync=require("readline-sync");
let age=parseInt(readlineSync.question("Type Your age"));

if(age<=12){
    console.log("You are 'CHILD'");
}
else if(age<=19){
    console.log("You are 'TEENAGER' ");
}
else if(age<=59){
    console.log("You are 'ADULT'");

}
else{
    console.log("You are 'SENIOR'");
}
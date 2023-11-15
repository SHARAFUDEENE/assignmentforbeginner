const readlineSync=require('readline-sync');
let mark=parseInt(readlineSync.question("Please Type your mark"));
if (mark>=60){
    console.log("Congrats... You are 'PASSED'");

}
else{
    console.log("Sorry... You are 'FAILED'");
}
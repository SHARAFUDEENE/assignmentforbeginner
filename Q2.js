const readlineSync=require('readline-sync');
let firstnum=parseInt(readlineSync.question(' Please enter your first number '));
let Secondnum=parseInt(readlineSync.question('Please enter Second number'))

console.log("SUM is=",firstnum+Secondnum)
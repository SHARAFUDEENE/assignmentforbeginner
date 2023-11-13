const readlineSync=require('readline-sync');
let product1=parseInt(readlineSync.question("Enter a number"));
let product2=parseInt(readlineSync.question("Enrer second number"));
let product=product1*product2;
console.log("Product num is",product)

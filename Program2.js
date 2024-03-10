//Print all numbers from 1 to n using a while loop.

var n,i=1;
const prompt = require("prompt-sync")();
n= prompt("Enter the number you want to print");
while(i<=n)
{
    console.log(i);
    i++;
}

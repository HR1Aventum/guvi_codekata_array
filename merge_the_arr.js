const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	Rearrange(userInput)});

var num = []
var num1= []
var num2= []
function Rearrange(data){
    num = data[0].split(" ");
    for(var i = 0 ; i<=num[0] ;i++){
        num1 = data[1].split(" ")
        
    for (var k = 0; k<=num[1] ; k++){
        num2 = data[2].split(" ")
    
       
    }
     var arr = (num1.sort()).concat((num2.sort(function(a, b){return b-a})))
        
    }
     console.log(arr.join(" "))
}

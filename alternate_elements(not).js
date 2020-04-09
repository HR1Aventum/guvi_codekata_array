const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	Rearrange(userInput)});

var num = [1]
function Rearrange(data){
    for(var i =0 ; i<=data[0]; i++){
    
     num[0] = data[1].split(" ");
     }
     
  if(data[0] == num[0].length){
      var b = num[0];
      var temp = [];
      for (j=0; j<=data[0].length ; j++){
          if(j%2===0){
            for(k=1; k<=data[0].length ; k+=2)
              temp.push(b[k])
              
          }
          
      }

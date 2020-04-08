const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	Movie_dict(userInput)});
var str = [1]
function Movie_dict(data){
for(var i =0 ; i<=data[0]; i++){
    
     str[0] = data[1].split(" ");
     

  }
 if(data[0] == (str[0]).length){
  console.log(str[0].sort().join(" "))
 }
}

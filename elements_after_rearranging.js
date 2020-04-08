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
  if(data[0] == num[0].length && num<data[0]){
  var b = num[0]
  var temp =[]
  for (i=0;i<data[0];i++ ){
       temp[i] = b[b[i]] 
  }
  for (i=0;i<data[0];i++ ){
      b[i] = temp[i]
  }
  console.log(b.join(" "))
  }
}

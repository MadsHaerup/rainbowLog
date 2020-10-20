//Prints each letter of a string in different colors javascript

var colors = ["\x1b[31m", "\x1b[33m", "\x1b[32m", "\x1b[36m", "\x1b[34m", "\x1b[35m"];
var reset = "\x1b[0m";
var output = "";

function rainbowLog(string) { 
   
    for (let i = 0; i < string.length; i++) {
       output+= colors[i % colors.length] + string[i];
      } 
    
    console.log(output + reset);
};    

//commmon JS export
module.exports = rainbowLog;
//rainbowLog("Hello World!");
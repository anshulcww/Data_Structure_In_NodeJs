var express = require('express');
var app = express();

let input1 = "abcdaf";
let input2 = "zbcdf";

let array = [[]];

for (var i = 0; i <= 1; i++) {
    array[0][i] = 0
}

for (var j = 2; j <= input1.length + 1; j++) {
    array[0][j] = input1.charAt(j - 2);
}
array[1] = [];
array[1][0] = 1;
for (var i = 1; i <= input1.length + 1; i++) {
    array[1][i] = 0
}

for(var i =2; i<= input2.length+1; i++){
    array[i] = [];
    array[i][0] = input2.charAt(i-2);
    array[i][1] = 0;
}
 function longestCommonSubstr(){
     for(var i =0; i< input2.length; i++){
         for(var j = 0; j<input1.length; j++){
            //  console.log(input2.charAt(i) + " " + input1.charAt(j));
            //  console.log(input1.charAt(j))
            var k = i +2;
            var l = j+2;
             if(input2.charAt(i) == input1.charAt(j)){
                 array[k][l] = array[k-1][l-1] + 1
             }else{
                 array[k][l] = 0;
             }
         }
     }
 }
 longestCommonSubstr();

//console.log(Math.max(...array));

app.listen(3000);
var express = require('express');
var app = express();


let inputArray = [0,1,0,2,1,0,1,3,2,1,2,1];

function rainWaterTrap(){
    // get left max iterate from left
    let left_max_so_far = 0;
    let leftMaxArray = [];
    let right_max_so_far = 0;
    let rightMaxArray = [];

    for(var i = 0; i<inputArray.length; i++){
        if(left_max_so_far < inputArray[i]){
            left_max_so_far = inputArray[i];
        }
        leftMaxArray.push(left_max_so_far);
    }

    for(var j = inputArray.length - 1; j>=0; j--){
        //console.log(inputArray[j])
        if(right_max_so_far < inputArray[j]){
            right_max_so_far = inputArray[j]
        }
        rightMaxArray.unshift(right_max_so_far);
    }
    // console.log(leftMaxArray);
    // console.log(rightMaxArray);
    let result = 0
    for(var k = 0; k<inputArray.length; k++){
         let currentWater = Math.min(leftMaxArray[k], rightMaxArray[k]) - inputArray[k]
            result += currentWater;
        }
        console.log(result);

}
rainWaterTrap();
app.listen(3000);
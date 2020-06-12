var express = require('express');
var app = express();

//console.log(Math.max(...array));
// Convert 0 to 5
function abc(num){
    if(num == 0){ return 0}
        var digit = num%10;
        if(digit == 0){
          digit = 5
        }
        console.log(abc(Math.floor(num/10)) * 10 + digit)
        return abc(Math.floor(num/10)) * 10 + digit
    }
   // abc(1020)

// Minimum distance between two no's
let array = [3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3 ]
let x = 3 
let y = 6
let minDistance = Number.MAX_SAFE_INTEGER;
function mindis(){
    let prev = -1;
    for(var i =0; i<array.length; i++){
        if(array[i] == x || array[i] == y){
            prev = i
            break;
        }
    }
    for(var i = 0; i<array.length; i++){
        if(array[i] == x || array[i] == y){
            if(array[prev] != array[i] && (i-prev) < minDistance){
                console.log('anshukl')
                minDistance = i - prev
                prev = i
            }else{
                prev = i
            }
        }
    }
    console.log(minDistance)
    return minDistance
}
//console.log(mindis())

// Max rectangle histogram area
var input = [1,1,2,3]
var stack = []
let area = 0;
let maxArea = 0;

function mrh(){
    for(var i = 0; i< input.length;){
        if(stack.length === 0 || input[stack[stack.length -1]] <= input[i]){
            stack.push(i);
            i++;
        }else{
            let top = stack.pop();
            if(stack.length === 0){
                area = input[top] * i
            }else{
                area = input[top] * (i - stack[stack.length -1] -1)
            }
            if(area > maxArea){
                maxArea = area
            }
        }
    }

    while(stack.length> 0){
        let top = stack.pop();
        if(stack.length === 0){
            area = input[top] * i
        }else{
            area = input[top] * (i - stack[stack.length -1] -1)
        }
        if(area > maxArea){
            maxArea = area
        }
    }
    return maxArea
}

console.log(mrh())

app.listen(3000, () => {
    console.log('Server running on port 3000')
});
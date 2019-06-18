var express  = require('express');
var app = express();
let floor = 6;
let egg = 2
let arr = [];
// arr[0] = [];

for(var i =0; i<=egg; i++){
    arr[i] = [];
    arr[i][0] = i;
    
    for(var j = 0; j<= floor; j++){
        if(i ==0){
            arr[i][j] = j;
        }
       
      
    }
}
for(var k = 1; k<=floor; k++){
    arr[1][k] = k
}






function eggDrop(floor, egg){
var c = 0;
for(var i =  2; i<= egg; i++){
    for(var j = 1; j<= floor; j++){
        if(i> j){
            // console.log(i);
            // console.log(j);
            arr[i][j] = arr[i-1][j]
        }else{
            //console.log("anshul")
            let minArray = [];
            for(var k = 1; k <=j ; k++){
                c = 1 + Math.max(arr[i-1][k-1], arr[i][j-k]);
                // if(c < arr[i][j]){
                //     arr[i][j] = c;
                // }
                minArray.push(c);
            }
            let minTrial = Math.min(...minArray);
            arr[i][j] = minTrial;
        }

    }
}

console.log(arr[egg][floor])
return arr[egg][floor];
}


eggDrop(6,2);

console.log(arr);

app.listen(3000);
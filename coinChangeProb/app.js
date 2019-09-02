var express =  require('express');
var app =  express();

var Array2d = require('array-2d');
var arr = new Array2d(6, 12, 1);


arr.set(0, 0 , 0);
arr.set(0,1,0);

let coins = [2,3,5,6]

for(var i = 2; i < arr.n ; i++){
    arr.set(0, i , i-1);
}

for(var j = 0; j < arr.n ; j++){
    arr.set(1, j, 0)
}

for(var k = 2; k < arr.m; k++){
    arr.set(k, 0,  coins[k-2])
}

for(var l = 2; l < arr.m; l++ ){
    for(var k = 2; k< arr.n; k++){
      if(arr.get(0,k) >= coins[l-2])  {
          arr.set(l,k, arr.get(l-1, k) + arr.get(l, k-coins[l-2]))
      }else{
          arr.set(l, k, arr.get(l-1, k) )
      }
    }
}

console.log(arr.toString());

// var array = [
//     [0,0,1,2,3,4,5,6,7,8,9,10],
//     [2,1],
//     [3,1],
//     [5,1],
//     [6,1]
// ]
// let coins = [2,3,5,6]
// //console.log(array[0].length);

// function coinChangeProblem(){
//     for(var i = 1; i<=array.length; i++){
//         for(var j = 2; j<=array[0].length; j++){
//             let k = i-1;
//             // if(i<0){
//             //     array[i][j] = 0;
//             // }
//             if(j>= coins[k]){
//                 array[i][j] = array[i-1][j] + array[i][j- coins[k]];
//             }else{
//                 array[i][j] = array[i-1][j]
//             }
//         }
//     }
// }

// coinChangeProblem();
app.listen(3000);

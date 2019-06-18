var express = require('express');
var app = express();


var maze = [
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 1]
]
let sol = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]

let n = maze.length;

function isSafe(maze, x, y){
    if(x<n && y < n && maze[x][y] == 1 && x>=0 && y>= 0){
        return true;
    }
}
function solveMazeUtil(maze, x, y, sol){
    if(x == n-1 && y == n-1){
        sol[x][y] = 1
        return true;
    }

    // Check if maze[x][y] is valid

    if(isSafe(maze, x, y)){
        sol[x][y] = 1;

        // check for forward direction
        if(solveMazeUtil(maze, x+1, y, sol)){
            return true;
        }
        // check for downward direction
          if(solveMazeUtil(maze, x, y+1, sol)){
            return true;
        }
        sol[x][y] = 0;
        return false;

    }

    return false;



}


function solveMaze(){
   if(solveMazeUtil(maze, 0, 0, sol)){
       return 'Possible'
   } 
   return 'Not Possible'
}
solveMaze();
console.log(sol);


//console.log(maze);







var port = 3000;
app.listen(port, () => {
    console.log('server is running at Port' + port)
});
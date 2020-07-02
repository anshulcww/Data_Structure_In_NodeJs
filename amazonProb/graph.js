// Minimum iteration required to rot all oranges
let matrix = [[ 2, 1, 0, 2, 1],[1, 0, 1, 2, 1 ],[1, 0, 0, 2, 1]]
function countIteration(){
    let count = 0
    let q =[]
    for(var i =0; i<matrix.length ; i++){
        for(var j =0; j<matrix[0].length; j++){
            if(matrix[i][j] === 2){
                q.push(i+ ","+ j)
                // bfsUtilForIteration(matrix)
            }
        }
    }
    // Add Delimiter ()
    q.push(-1 + ","+ -1)
    // console.log(q)
    while(q.length > 0){
        let boolean = false
        // Checking for deliminitor
        // console.log(q[0])
        let size = q.length
        for(var z = 0; z < size; z++){
            if(z != size-1){
                let top = q.shift()
                console.log(q)
                // console.log(z)
                let x = Number(top[0])
                let y = Number(top[2]) 
                // console.log(top)
                //for left side
                
                if(isFreshOrange(matrix, x, y-1)){
                    q.push(x + "," + Number(y-1))
                    matrix[x][y-1] = 2
                    if(!boolean){
                        count++;
                        boolean = true
                    }
                }
                // FOr top Side
                if(isFreshOrange(matrix, x-1, y)){
                    q.push(Number(x-1) + "," + y)
                    matrix[x-1][y] = 2
                    if(!boolean){
                        count++;
                        boolean = true
                    }
                }
                // FOr Right Side
                if(isFreshOrange(matrix, x, y+1)){
                    q.push(x + "," + Number(y+1))
                    matrix[x][y+1] = 2
                    if(!boolean){
                        count++;
                        boolean = true
                    }
                }
                // For Down Side
                if(isFreshOrange(matrix, x+1, y)){
                    q.push(Number(x+1) + "," + y)
                    matrix[x+1][y] = 2
                    if(!boolean){
                        count++;
                        boolean = true
                    }
                }   
            }
            // if(q[z][0] != -1 && q[z][2] != -1){
               
            // }
        }
        // while(!ifPeekDelimeter(q[0])){
        //    //console.log(q)
            
        // }
        q.shift()
        // console.log(q)
        boolean = false
        if(q.length > 0){
            // console.log("Anshul")
            q.push(-1 + "," + -1)
        }

    }
    return ifAnyFreshOrangesLeft(matrix) ? -1 : count;

}
function ifPeekDelimeter(obj){
        console.log(obj)
        //  if(!obj) {
        //      return true
        //  }
        return obj[0] == -1 && obj[2] == -1;
}

function ifAnyFreshOrangesLeft(matrix){
    for(var i =0; i<matrix.length ; i++){
        for(var j =0; j<matrix[0].length; j++){
            if(matrix[i][j] === 1){
                return true
            }
        }
    }
}

function isFreshOrange(mat, row, col){
    return row >= 0 && row < matrix.length && col >=0 && col < matrix[0].length && mat[row][col] === 1
}

console.log(countIteration())



//Number of Islands 
// Using DFS
// let matrix = [[1, 1, 0, 0, 0] , [0, 1, 0, 0, 1] , [1, 0, 0, 1, 1], [0, 0, 0, 0, 0] , [1, 0, 1, 0, 1] ]
function countIslandsUsingDFS(){
    let count = 0
    let visitedMatrix = [
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false]
                        ]
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 1 && !visitedMatrix[i][j]){
                dfsUtil(matrix, i, j, visitedMatrix);
                count++;
            }
        }
    }
    console.log(count)
    return count
}

function dfsUtil(matrix, x, y, visitedMatrix){
    visitedMatrix[x][y] = true
    // Checking for 8 directions
    if(isSafe(matrix, x-1, y-1, visitedMatrix)){
        dfsUtil(matrix, x-1, y-1, visitedMatrix)
    }
    if(isSafe(matrix, x-1, y, visitedMatrix)){
        dfsUtil(matrix, x-1, y, visitedMatrix)
    }
    if(isSafe(matrix, x-1, y+1, visitedMatrix)){
        dfsUtil(matrix, x-1, y-1, visitedMatrix)
    }
    if(isSafe(matrix, x, y+1, visitedMatrix)){
        dfsUtil(matrix, x+1, y+1, visitedMatrix)
    }
    if(isSafe(matrix, x+1, y+1, visitedMatrix)){
        dfsUtil(matrix, x+1, y+1, visitedMatrix)
    }
    if(isSafe(matrix, x+1, y, visitedMatrix)){
        dfsUtil(matrix, x+1, y, visitedMatrix)
    }
    if(isSafe(matrix, x + 1, y-1, visitedMatrix)){
        dfsUtil(matrix, x + 1, y-1, visitedMatrix)
    }
    if(isSafe(matrix, x, y-1, visitedMatrix)){
        dfsUtil(matrix, x, y-1, visitedMatrix)
    }

}

function isSafe(matrix, row, col, visitedMatrix){
    return row >= 0 && row < matrix.length 
            && col >=0 && col < matrix[0].length
            && matrix[row][col] === 1
            && !visitedMatrix[row][col]
}  

//countIslandsUsingDFS()

// No of Islands using BFS
function countIslandsUsingBFS(){
    let count = 0
    let visitedMatrix = [
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false]
                        ]
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 1 && !visitedMatrix[i][j]){
                bfsUtil(matrix, i, j, visitedMatrix);
                count++;
            }
        }
    }
    console.log(count)
    return count
}

function bfsUtil(matrix, x, y, visitedMatrix){
    let q = []
    visitedMatrix[x][y] = true
    q.push(x + ',' + y)
    while(q.length > 0){
        let top = q.shift()
        let row = Number(top[0])
        let col = Number(top[2])
        // check for 8 directions
        if(isSafe(matrix, row-1, col-1, visitedMatrix)){
            q.push(row-1 + "," + col-1)
            visitedMatrix[row-1][col-1] = true

        }
        if(isSafe(matrix, row-1, col, visitedMatrix)){
            q.push(row-1 + "," + col)
            visitedMatrix[row-1][col] = true
        }
        if(isSafe(matrix, row-1, col+1, visitedMatrix)){
            q.push(row-1+ ","+ col+1)
            visitedMatrix[row-1][col+1] = true
        }
        if(isSafe(matrix, row, col+1, visitedMatrix)){
            q.push(row + "," + col+1)
            visitedMatrix[row][col+1] = true
        }
        if(isSafe(matrix, row+1, col+1, visitedMatrix)){
            q.push(row+1 + "," + col+1)
            visitedMatrix[row+1][col+1] = true
        }
        if(isSafe(matrix, row+1, col, visitedMatrix)){
            q.push(row+1 + "," + col)
            visitedMatrix[row+1][col] = true

        }
        if(isSafe(matrix, row+1, col-1, visitedMatrix)){
            q.push(row+1 + "," + col-1)
            visitedMatrix[row+1][col-1] = true

        }
        if(isSafe(matrix, row, col-1, visitedMatrix)){
            q.push(row + "," + col-1)
            visitedMatrix[row][col-1] = true
        }
    }
}

// countIslandsUsingBFS()
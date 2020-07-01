//Number of Islands 
// Using DFS
let matrix = [[1, 1, 0, 0, 0] , [0, 1, 0, 0, 1] , [1, 0, 0, 1, 1], [0, 0, 0, 0, 0] , [1, 0, 1, 0, 1] ]
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
        let top = q.pop()
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

countIslandsUsingBFS()
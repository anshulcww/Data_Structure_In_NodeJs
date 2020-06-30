
// Search in a row wise and column wise sorted matrix
let searchMatrix = [[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]]
function searchInMatrix(k){
    let i = 0;
    let j = searchMatrix.length - 1

    while(i < searchMatrix.length && i >= 0 && j >= 0 && j<searchMatrix.length){
        if(searchMatrix[i][j] === k){
            return i + " " + j
        }else if(searchMatrix[i][j] > k){
            j--
        }else if(searchMatrix[i][j] < k){
            i++
        }
    }
    return -1
}
console.log(searchInMatrix(55))


// Sliding Window Maximum (Maximum of all subarrays of size k)

let array = [1, 2, 3,1, 4, 5, 2,3, 6]
let k = 3

// // Using Deque Optimized soltuion later
// function maxSubArrayOptimised(){

// }

// Using Brute force
function maxSubArray(){
    for(var i = 0; i<=array.length-k; i++){
        let subArray = []
        // subArray.push(array[i])
        let max = array[i]
        for(var j = i; j<i+k; j++){
            subArray.push(array[j])
            // console.log(i, j)
            if(max < array[j]){
                max = array[j]
            }
        }
        // console.log(i)
        console.log("Max of " + subArray + " is " + max)
    } 
}

// maxSubArray()

// Celebrity Problem
// let matrix = [[0,0,1,0],[0,0,1,0], [0,1,0,0], [0,0,1,0]]

// Optimezed solution
function checkCelebrityOptimized(){
    // 2 Conditions
    // If X knows Y , then Y must not be the celebrity
    // If X doesn't knows Y, then X might be the Celebrity
    let x = 0
    let y = matrix.length - 1
    
    while(x<y){
        if(knows(x,y)){
            x++;
        }else{
            y--;
        }
    }
    for(var i =0; i<matrix.length; i++){
        if(i != x && (knows(x,i) || !knows(i,x))){
            return "No Celebrity"
        }
    }
    return "The celebrity is " + x
}
// console.log(checkCelebrityOptimized())

// Brute Force Celebrity Problem
function checkCelebrity(){
    let m = new Map()
    m.set(0, 0)
    m.set(1,0)
    m.set(2,0)
    m.set(3,0)
    for(var i =0; i<matrix.length; i++){
        for(var j = 0; j<matrix[0].length; j++){
            if( j === i){
                continue
            }
            let index = knows(i,j)
            // console.log("Ansh")
            if(index === 1){
                m.set(i, 1)
            }
        }
    }
    // console.log(m, "anshuijnok")
    let count = 0
    for(var x of m){
        if(x[1] === 0){
            count++
            console.log("the celebrity is " + x[0])
        }
    }
    if(count === 0) {
        console.log("No celebrity")
    }
}
// helper function
function knows(a,b){
    if(matrix[a][b] === 1){
        return 1
    }else{
        return 0
    }
}
// checkCelebrity()


// Print K’th element in spiral form of matrix
// let matrix = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]

function kthElementInSpiralForm(mat, k){
    let row = 0
    let col = 0
    let lastRow = mat.length - 1
    let lastCol = mat[0].length -1
    let count = 0
    while(row <= lastRow && col <= lastCol){
        // first row print of a loop
        for(let i = col; i<=lastCol;  i++){
            console.log(mat[row][i])
            count++;
            if(count === k){
                console.log(k + ' ' + 'th Element in spiral form is =====' + mat[row][i])
                break;
            }
        }
        row++;
        // last col print of a loop
        for(let i = row; i<=lastRow; i++){
            console.log(mat[i][lastCol])
            count++;
            if(count === k){
                console.log(k + ' ' + 'th Element in spiral form is =====' + mat[i][lastCol])
                break
            }
        }
        lastCol--;
        if(row <= lastRow){
            for(var i = lastCol; i>=col; i--){
                console.log(mat[lastRow][i])
                count++
                if(count === k){
                    console.log(k + ' ' + 'th Element in spiral form is =====' + mat[lastRow][i])
                    break
                }
            }
            lastRow--;
        }
        if(col <= lastCol){
            for(var i = lastRow; i>=row; i--){
                console.log(mat[i][col])
                count++;
                if(count === k){
                    console.log(k + ' ' + 'th Element in spiral form is =====' + mat[i][col])
                    break
                }
            }
            col++;
        }
    }

}
//kthElementInSpiralForm(matrix, 17)



// Create 2D array in javascript of 3 * 3

function create2dMatrix(){
    let matrix = []
    for(var i = 0; i<3 ; i++){
        matrix[i] = []
    }
    let h = 0
    for(var i = 0; i <3; i++){
        for(var j = 0; j < 3; j++){
            matrix[i][j] = h++
        }
    }
}

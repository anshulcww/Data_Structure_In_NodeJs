let matrix = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]


// Print K’th element in spiral form of matrix
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

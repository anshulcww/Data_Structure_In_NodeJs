//Partition a set into two subsets such that the difference of subset sums is minimum



// Subset Sum problem 
// TRICK - if (A[i] > j)
// DP[i][j] = DP[i-1][j]
// else 
// DP[i][j] = DP[i-1][j] OR DP[i-1][sum-A[i]]

function isSubset(arr, total){
    let matrix = [[]]
    for(var i = 0; i<=arr.length; i++){
        matrix[i][0] = true
    }
    for(var i = 0; i<arr.length; i++){
        for(var j = 1; j<= total; j++){
            if(arr[i] > j){
                matrix[i][j] = matrix[i-1][j]
            }else{
                matrix[i][j] = matrix[i-1][j] || matrix[i-1][j-arr[i]]
            }
        }
    }
    // console.log(matrix[arr.length][total])
    return matrix[arr.length][total]
}
// isSubset([3, 4, 5, 2], 6)

// Minimum jump to reach end
function minJump(input){
    let minJumps = [0]
    let path = []
    for(var i = 1; i <input.length; i++){
        minJumps[i] = Number.MAX_VALUE
    }
    for(var i = 1; i<input.length; i++){
        let j = 0;
        while(j < i){
            if(i <= j + input[j]){
                if(minJumps[i] > minJumps[j] + 1){
                    minJumps[i] = minJumps[j] + 1;
                    path[i] = j
                }
            }
            j++
        }
    }
    console.log(path)
    return minJumps
}
// console.log(minJump([2, 3, 1, 1, 2, 4, 2, 0, 1, 1]))


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

//console.log(mrh())



// maximum sum subsequence Non- adjacent

function maxSumSub(arr){
    let incl = arr[0]
    let excl = 0
    for(var i = 1; i<arr.length; i++){
        let oldIncl = incl
        incl = Math.max(oldIncl, excl + arr[i])
        excl = oldIncl
    }
    return incl

}

// console.log(maxSumSub([4, 1 ,1,4, 2, 1]))
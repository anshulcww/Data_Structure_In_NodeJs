// Given an array of size n-1 and given that there are numbers from 1 to n with one missing, the missing number is to be found.
// Example:
// Input
// 1 2 3 5
// Output
// 4
// Input
// 1 2 4 5 7
// Output
// 3 6
// Input 
// 2 7 13
// Output
// 1 3 4 5 6 8 9 10 11 12

function printMissingNumber(arr){
    let s = new Set();
    for(let i = 0; i< arr.length; i++){
        s.add(i)
    }
    for(let j = 0; j<arr[arr.length - 1]; j++){
        if(!s.has(j)){
            console.log(j)
        }
    }
}

// [54,54,9,6,3,17,19,19,9,19]
// [54,9, 19]

function removeDup(arr){
    let s = new Set()
    let result = []
    for(let i = 0; i< arr.length; i++){
            if(!s.has(arr[i])){
                s.add(arr[i])
            }else{
                result.push(arr[i])
            }        
    }
    return result
}

// Call By Value and Call By Reference

function abc(obj){
    obj = "Verma"
}
let obj = "Anshul"
abc(obj)
console.log(obj)
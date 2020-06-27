
//Find the smallest window in a string containing all characters of another string


// Optimise solution for Count Number of occurence in a sorted array Time Complexity O(log(n))
// Idea is Get First occurence and Last Occurence and return last Occurence - First Occurence + 1
function countNoOfOccOptimizedSol(inputArr, x){
    let i = firstOccurence(inputArr, x, 0, inputArr.length - 1)
    if(!i){
        return "not found"
    }
    let j = lastOccurence(inputArr, x, 0, inputArr.length - 1)
    console.log(j - i + 1)

    // return j - i + 1 
}
//countNoOfOccOptimizedSol([1, 1, 2, 2, 2, 2, 3], 2)

// Last Occurence
function lastOccurence(inputArr, x, start, end){
    if(end >= start){
        let mid = Math.floor((start + end) / 2);
        if(mid === inputArr.length - 1 || inputArr[mid+1] > x && inputArr[mid] === x){
            return mid
        }else if(x < inputArr[mid]){
            return lastOccurence(inputArr, x, start, mid-1)
        }else{
            return lastOccurence(inputArr, x, mid+1, end)
        }
    }
    return false
}

// First Occurence
function firstOccurence(inputArr, x, start, end){
    if(end >=  start) {
        let mid = Math.floor((start + end) / 2);
        if(mid == 0 ||  inputArr[mid- 1] < x && inputArr[mid] === x){
            return mid
        }else if(x > inputArr[mid]){
            return firstOccurence(inputArr, x, mid+1, end)
        }else{
            return firstOccurence(inputArr, x, start, mid-1)
        }
    }
    return false
    
}

//Count number of occurrences (or frequency) in a sorted array Time Complexity O(Log(n) + count)
function countNoOfOccurences(inputArr, x){
    // First find index of a 'x'
    let index = binarySearch(inputArr, x);
    if(!index){
        console.log('not found')
        return false
    }
    let count = 1
    let left = index - 1
    let right = index + 1
    // loop for left side index
    while(left >= 0 && inputArr[left] === x){
        count++
        left--
    }
    // loop for right side index
    while(right < inputArr.length && inputArr[right] === x){
        count++;
        right++;
    }
    console.log(count)
}
//countNoOfOccurences([1, 1, 2, 2, 2, 2, 3], 2)

//Binary search algorithm (It only works on Sorted Array)
// Iterative Approach

function binarySearch(inputArr, k){
    let start = 0;
    let end = inputArr.length - 1
    while(start <= end){
        let mid = Math.floor((start + end)/2)
        if(inputArr[mid] === k ){
            console.log('index of a value ' + mid)
            return mid;
        }
        if(inputArr[mid] < k){
            start++;
        }else{
            end--
        }
        
    }
    return false
}

//binarySearch([1, 3, 5, 7, 8, 9, 12, 13 ,14], 12)

// Recursive appproach for Binary Search
function binarySearchRecursive(inputArr, k, start, end){
    if(start > end){
        console.log('Not Found')
        return false
    }
    let mid = Math.floor((start + end)/2);
    if(inputArr[mid] === k){
        console.log('index of a value ' + mid)
        return true
    }
    if(inputArr[mid] > k){
        return binarySearchRecursive(inputArr, k, start, mid -1)
    }else{
        return binarySearchRecursive(inputArr, k, mid+1, end)
    }
}
//binarySearchRecursive([1, 3, 5, 7, 8, 9, 12, 13 ,14], 12, 0, 8)
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

// app.listen(3000, () => {
//     console.log('Server running on port 3000')
// });
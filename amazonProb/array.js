// Count Inversion in an Array
// Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j

// Using Merge Sort
function countInversionUsingMergeSort(){

}

countInversionUsingMergeSort([])

//Using Brute Force
function countInversion(arr){
    let inversion = 0
    for(var i = 0; i< arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                inversion++
            }
        }
    }
    console.log(inversion)
}
countInversion([3, 1, 2])

// FInd Minimum Element in a sorted and rotated Array
function minElementInASortedAndRotatedArray(arr){
    let l = 0
    let h = arr.length - 1
    let mid = 0
    while(l < h){
        mid = Math.floor(l + (h -l)/2)
        if(arr[mid-1] > arr[mid] && arr[mid] < arr[mid+1]){
            console.log(arr[mid])
            return arr[mid]
        }
        if(arr[mid] < arr[h]){
            h = mid 
        }else{
            l = mid
        }
    }
    console.log(arr[mid])
    return arr[mid]
}
// minElementInASortedAndRotatedArray([1, 2, 3, 4])

// find-maximum-product-of-a-triplet-in-array
function maxProdTrip(arr){
    if(arr.length < 3){
        return -1
    }

    let max1 = Number.MIN_SAFE_INTEGER
    let max2 = Number.MIN_SAFE_INTEGER
    let max3 = Number.MIN_SAFE_INTEGER

    let min1 = Number.MAX_SAFE_INTEGER
    let min2 = Number.MAX_SAFE_INTEGER
    
    // console.log(max1, " ",  max2, " ", max3, " ")
    // console.log(min1, " ",  min2)
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i]> max1){
            max3 = max2
            max2 = max1
            max1 = arr[i]
        }else if(arr[i] > max2){
            max3 = max2
            max2 = arr[i]
        }else if(arr[i] > max3){
            max3 = arr[i]
        }

        if(arr[i] < min1){
            min2 = min1
            min1 = arr[i]
        }else if(arr[i] < min2){
            min2 = arr[i]
        }
        // return max of product of all max1, max2 & max3 or product of min1, min2 & max1
       

    }
    console.log(max1, " ",  max2, " ", max3, " ")
    console.log(min1, " ",  min2)
    let p1 = max1*max2*max3
    let p2 = max1*min1*min2
    console.log(Math.max(p1, p2))
    return Math.max(max1*max2*max3, max1*min1*min2) 
}

// maxProdTrip([-10, -3, -5, -6, -20])




// Remove duplicates using time complexity O(n) and space complexity O(1)
function removeDup(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[Math.abs(arr[i])] > 0){
            arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]
        }else{
            console.log(Math.abs(arr[i]))
        }
    }
}
// removeDup([1, 2,3, 4, 1, 2,6, 3, 8, 9, 6, 4])


//Find k closest elements to a given value in a sorted array
function kClosestNumbersSortedArray(arr, x, k){
    
}

// kClosestNumbersSortedArray([12, 16, 22, 30, 35, 39, 42, 
//     45, 48, 50, 53, 55, 56] , 35, 4)

//Maximum of all subarrays of size k
// Uisng Window Sliding technique
function maxSubarrayK(arr, k){
    let currMax = 0
    let deque = []
    // add element 
    for(var i = 0; i < k; i++){
        while(deque.length > 0 && arr[i] >= arr[deque[deque.length - 1]]){
            deque.pop()
        }
        deque.push(i)
    }
    for(var i = k; i < arr.length ; i++){
    console.log(arr[deque[0]])
        // 1 remove elements which are not in the window
        
    while(deque.length > 0 && deque[0] <= i-k){
        deque.shift()
    }
    // 2 remove unwanted elements in the deque
    while(deque.length > 0 && arr[i] >= arr[deque[deque.length - 1]]){
        deque.pop()
    }
    deque.push(i)
    // push i
    }
    // print max of last window
    console.log(arr[deque[0]])
}
// maxSubarrayK([12, 1, 78, 90, 57, 89, 56], 3)

// Peak Element very important
function findPeak(arr){
    let start = 0
    let end = arr.length - 1
    // [5, 10, 20, 15]
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2)
        // console.log(mid)
        if(mid > 0 && mid < arr.length-1){
            if(arr[mid-1] < arr[mid] && arr[mid+1] < arr[mid] ){
                console.log("Peak element is " +  arr[mid])
                return mid
            }else if(arr[mid-1] > arr[mid]){
                end = mid -1
            }else{
                start = mid + 1
            }
        }else if(mid == 0){
            if(arr[mid + 1] < arr[mid]){
                console.log("Peak element is " +  arr[mid])
                return 0
            }else{
                return 1
            }
        }else if(mid === arr.length - 1){
            if(arr[mid - 1] < arr[mid]){
                console.log("Peak element is " +  arr[mid])
                return mid
            }else{
                console.log("Peak element is " +  arr[mid])
                return mid - 1
            }
        }
        
    }
}
// findPeak([100, 80, 60, 50, 20])



//Find the smallest window in a string containing all characters of another string
// Brute Force
// Generate all substrings
// function smallest





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
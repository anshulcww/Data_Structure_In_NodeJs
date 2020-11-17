//Smallest Subarray with a given sum (easy)

function smallestSubarray(sum, array){
    let windowStart = 0;
    let smallestSize = Infinity;
    let currentSum = 0
    for(let windowEnd = 0; windowEnd< array.length; windowEnd++ ){
        currentSum += array[windowEnd]
        while(currentSum >= sum){
            smallestSize = Math.min(smallestSize, j-i+1)
            currentSum = currentSum - array[windowStart]
            windowStart++;
        }

    }

  if (smallestSize === Infinity) {
    return 0;
  }
  return smallestSize;

}

// smallestSubarray(8, [2, 5 , 6, 1, 2, 5, 7, 1])

// Longest Substring with K Distinct Characters (medium)

function longest_substring_with_k_distinct(str, k){
    let windowStart = 0;
    let maxLength = 0;
    let charFrequency = new Map();

    for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
        let rightChar = str[windowEnd];
        if(!rightChar in charFrequency){
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar]  += 1
        while(Object.keys(charFrequency).length > k){
            let leftChar = str[windowStart]
            charFrequency[leftChar] -= 1;
            if(charFrequency[leftChar] === 0){
                delete charFrequency[leftChar]
            }
            windowStart += 1

        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);

    }
    return maxLength;

}

//First Negative Number in every Window of Size K | Sliding Window

function firstNegative(k, arr){
    let windowStart = 0;
    let result = [];
    let currentList = [];

    for(let windowEnd = 0; windowEnd < arr.length - k + 1; windowEnd++){
        if(windowEnd-windowStart+1 < k){
            // push negative numbers to current list
            if(arr[windowEnd] < 0){
                currentList.push(arr[windowEnd])
            }
        }else if(windowEnd-windowStart+1 == k){
            if(arr[windowEnd] < 0){
                currentList.push(arr[windowEnd])
            }
            if(currentList.length === 0){
                result.push(0)
            }else{
                if(arr[windowEnd] === currentList[0]){
                    result.push(currentList.shift())
                    windowStart++;
                }

            }
        }
    }
    console.log(result)
    return result
}
firstNegative(2, [-8, 2, 3, -6, 10])
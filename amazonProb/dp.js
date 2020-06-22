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

console.log(maxSumSub([4, 1 ,1,4, 2, 1]))
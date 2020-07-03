// Square root of a number upto  decimal
// the algorithm we start iterating from i = 1
// if i*i === number return i if(i)

function findSquareRoot(n){
    let i = 1
    let found = false
    while(!found){
        if(i*i === n){
             console.log(i)
             found = true
        }else if(i*i > n){

            let result  = square(n, i-1, i)
            // console.log("ANshul")
            console.log(result)
            found = true
        }
        i++
    }
}

function square(number, start, end){
    let mid =   (start + end)/2
    console.log(mid)
    let mul = mid*mid
    // console.log(mul - number)
    let abs = Math.abs(mul- number)
    console.log(abs)
    if(mul === number || abs < 0.0001){
        return mid
    }else if(mul < mid){
        return square(number, mid, end)
    }else{
        return square(number, start, mid)
    }
}
findSquareRoot(3)

// function squareRoot(n){
//     let isNegative = false
//     if(n < 0) {
//         n = -n;
//         isNegative = true;
//     }

//     if(n == 1) {
//         return n + (isNegative ? "i" : "");
//     }
//     let start = 0
//     let end = n
//     let mid = (start+end)/2
//     let precision = 0.000000001
//     let prevMid = 0
//     let absDiff = Math.abs(mid - prevMid)
//     while(mid*mid != n && absDiff > precision){
//         if(mid*mid > n){
//             end = mid
//         }else{
//             start = mid
//         }
//         prevMid = mid
//         mid = (start + end)/2
//         console.log(mid)
//         absDiff = Math.abs(mid-prevMid)
//     }
//     console.log(mid)
//     return mid + (isNegative ? "i" : "");

// }
// console.log(squareRoot(36))
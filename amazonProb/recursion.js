// Print 1 to n
function printNumber(n){
    if(n== 0){
        return 0
    }
    printNumber(n-1)
    console.log(n)
    // return 
}
printNumber(10)
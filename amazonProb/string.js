// Check if a string is substring of another

let s1 = "for"
let s2 = "geeksforgeeks"

// Brute Force
function isSubtring(){
    let sLength1 = s1.length;
    let sLength2 = s2.length;
    for(var i = 0; i<sLength2 - sLength1; i++){
        let j;
        for(j = 0; j < sLength1; j++){
            if(s1[j] !== s2[i+j]){
                break
            }
        }
        if(j === sLength1){
            return i
        }
    }
    return false
}
// console.log(isSubtring())

// Using KMP Algorithm


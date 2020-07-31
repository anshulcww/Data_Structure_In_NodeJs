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

// Substrings with similar first and last characters
// Using Brute Force
function similarFirstAndLastChar(str){
    let count  = 0 
    for(var i = 0; i<str.length; i++){
        for(var j = i; j < str.length; j++){
            if(str[i] == str[j]){
                count++
            }
        }
    }
    console.log(count)
}
similarFirstAndLastChar("geeksforgeeks")
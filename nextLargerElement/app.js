const express = require('express');
let app = express();
var Stack = require('stack-ds')
var st = new Stack();

var arr = [1,4,3,6,5,6,7,1];
function nextLargerElement(){

    st.push(arr[0]);

    //System.out.println("Next Greater Element");
    for (var i = 1; i < arr.length; i++) 
    {

        /* if the array element is greater than the element present
        at the top of stack, then arr[i] is the next greater element
        of element present at the top of stack */
        while (!st.isEmpty() && arr[i] > st.peek()) 
        {
            console.log(st.pop() + " : " + arr[i]); 
        }

        // Push the array element to the stack to find its next
        // greatest element
        st.push(arr[i]);
    }
    
    // if the element does not have next greater element present
    // in the array, print -1 
    while (!st.isEmpty()) 
    {
        console.log(st.pop() + " : -1");
    }


}

nextLargerElement();

app.listen(3000);
class Stack{
    constructor(){
        this.stackArr = []
    }
    push(val){
        this.stackArr.push(val)
    }
    pop(){
        if(this.stackArr.length === 0){
            return "Empty Stack"
        }
        return this.items.pop()
    }
}


//Implement Stack using two Queues
// class ImplementStackUsingTwoQueue{
//     constructor(){
//         this.queue1 = []
//         this.queue2 = []
//     }
//     //push method
//     enqueue(val){
//         this.queue1.push(val)
//     }
//     dequeue(){
//         this.queue1.pop()
//     }
// }

// function impleStackUsingQueue(q1){

// }

impleStackUsingQueue()



// Stock span problem
function calStockSpan(inputArr){
    let stack = []
    let span = []
    stack[0] = 0
    span[0] = 1
    for(var i = 1; i<inputArr.length; i++){
        while(stack.length > 0 && inputArr[stack[stack.length - 1]] <= inputArr[i]){
            stack.pop()
        }
        span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1]
        stack.push(i)
    }
    return span
}
// console.log(calStockSpan([10, 4, 5, 90, 120, 80]))
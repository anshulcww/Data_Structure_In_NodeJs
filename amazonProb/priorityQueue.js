class QElement{
    constructor(element, priority){
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue{
    constructor(){
        this.items = []
    }
    // functions to be implemented 
    // enqueue(item, priority)
    // highest priority to the front 
    enqueue(item, priority){
        var qElement = new QElement(item, priority)
        let contains = false
        for(var i = 0; i<this.items.length; i++){
            if(this.items[i].priority < qElement.priority){
                this.items.splice(i, 0, qElement)
                contains = true
                break
            }
        }
        if(!contains){
            this.items.push(qElement)
        }
    }
    // dequeue()
    dequeue(){
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift();    
    } 
    // front() 
    front(){ 
    // returns the Front element of  
    // the queue without removing it. 
    if(this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
    } 
    // isEmpty() 
    isEmpty(){ 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    } 
    // printPQueue()
    printQueue(){ 
    var str = ""; 
    for(var i = 0; i < this.items.length; i++) 
        str += this.items[i] +" "; 
    return str; 
    }  
}


// Find k closest numbers in an unsorted array
function kClosestNumbersUnsortedArray(arr, x, k){
    var pq  = new PriorityQueue()
    for(var i = 0; i<k; i++){
        let diff = Math.abs(arr[i]-x)
        pq.enqueue(arr[i], diff)
    }
    // console.log(pq);
    for(var i = k; i<arr.length; i++){
        let diff = Math.abs(arr[i] - x)
        if(diff < pq.front().priority){
            pq.dequeue()
            pq.enqueue(arr[i] , diff)
        }
    }
    console.log(pq)

}
kClosestNumbersUnsortedArray([10, 2, 14, 4, 7, 6], 5, 3)
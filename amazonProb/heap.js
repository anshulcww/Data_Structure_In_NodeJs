class MinHeap{
    constructor(){
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null]
    }
    getMin(){
        return this.heap[1]
    }
    insert(node){
        //Inserting a node at the last of an array
        this.heap.push(node)
        if(this.heap.length > 1){
            let current  = this.heap.length - 1
            while(current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]){
                //Swapping 
                let temp = this.heap[Math.floor(current/2)]
                this.heap[Math.floor(current/2)] = this.heap[current]
                this.heap[current] = temp
                current = Math.floor(current/2)
            }
        }
    }
}

// let minHeap  = new MinHeap()
// minHeap.insert(20)
// minHeap.insert(10)
// minHeap.insert(30)
// minHeap.insert(5)
// minHeap.insert(40)
// minHeap.insert(12)
// console.log(minHeap)

//Kth largest element in an array
function kthLargest(arr, k){
    let minHeap  = new MinHeap();

    for(var i = 0; i<k; i++){
        minHeap.insert(arr[i])
    }
    console.log(minHeap)

}
kthLargest([1, 23, 12, 9, 30, 2, 50], 3)



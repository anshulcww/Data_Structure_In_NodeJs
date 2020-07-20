class MinHeap{
    constructor(){
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null]
    }
    getMin(){
        return this.heap[1]
    }
    buildHeap(size, arr){
        // let s = arr.length-1 
        // console.log(arr)
        for(var i=Math.floor(size/2 -1); i>=0; i--){
            //console.log('Anshul')
            this.heapify(i, arr, size)
        }
        console.log(arr)
        return arr
        // console.log(arr)
    }
    
    heapify(i, arr, size){
       // console.log(i)
        if(i >= size/2){
            return false
        }
        let smallest = i
        let left = 2*i+1
        let right = 2*i+2
        // console.log(i)
        if(arr && arr[left] < arr[smallest]){
            smallest = left
        }
        if(arr && arr[right] < arr[smallest]){
            smallest = right
        }
        if(smallest !== i){
            let temp = arr[smallest]
            arr[smallest] = arr[i]
            arr[i] = temp
            this.heapify(smallest, arr, size)
        }
    }
    remove(arr){
        let end = arr.pop()
        arr[0] = end
        this.heapify(0, arr, arr.length)
        return arr
    }
}




// Connect n ropes with minimum cost 
// build min heap
function minCost(arr){
    // let minHeap = []
    let cost = 0
    let size = arr.length-1
    // Build Heap
    for(var i = Math.floor(arr.length/2) - 1; i >= 0; i--){
        heapify(arr, i, size)
    }
    while(size > 0){
        let temp = arr[0]
        arr[0] = arr[size--]
        heapify(arr, 0, size)
        arr[0] =  arr[0] + temp
        cost = cost + arr[0]
        heapify(arr, 0, size)
    }
    console.log(cost)
    return cost
}

function heapify(heap, i, size){
    let smallest = i
    let leftChild = 2*i+1
    let rightChild = 2*i+2

    if(leftChild <= size && heap[smallest] > heap[leftChild]){
        smallest = leftChild
    }

    if(rightChild <= size && heap[smallest] > heap[rightChild]){
        smallest = rightChild
    }

    if(smallest != i){
        let temp = heap[i]
        heap[i] = heap[smallest]
        heap[smallest] = temp
        heapify(heap, smallest, size)
    }
}
// minCost([4, 3, 2, 6])

// Kth 
// let minHeap = new MinHeap()
// let res = minHeap.buildHeap(4, [130, 20, 30, 40])
// console.log(minHeap.remove(res))



// kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array
let matrix = [[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]]

function kthSmallestIn2D(key){
    let minHeapArray = []
    for(var i = 0; i<matrix.length; i++){
        minHeapArray[i] = matrix[0][i]
    }
    let minHeap = new MinHeap()
    minHeap.buildHeap(minHeap.length, minHeapArray)
    
}
// kthSmallestIn2D(7)

//Kth largest element in an array

function kthLargest(arr, k){
    let minHeapArr = []
    for(var i =0; i<k; i++){
        minHeapArr[i] = arr[i]
    }
    let minHeap = new MinHeap()
    minHeap.buildHeap(k, minHeapArr)
    // console.log(MinHeap)
     // Loop For each element in array 
    // after the kth element 
    //console.log(arr)
    // for (var j = 0; j < k; j++) { 
    //     //cout << arr[i] << " "; 
    //     console.log(arr[j])
    // }  
    for (var i = k; i < arr.length; i++) { 
        // console.log(arr[k])
        // if current element is smaller  
        // than minimum element, do nothing  
        // and continue to next element 
        if (minHeapArr[0] > arr[i]) 
            continue; 
  
        // Otherwise Change minimum element to  
        // current element, and call heapify to 
        // restore the heap property 
        else { 
            minHeapArr[0] = arr[i];
            // let temp = arr[0]
            // arr[0] = arr[i]
            // arr[i] = temp
            minHeap.heapify(0, minHeapArr, k); 
        } 
    }
    for (var j = 0; j < k; j++) { 
        //cout << arr[i] << " "; 
        console.log(minHeapArr[j])
    }  
}

// kthLargest([101, 500, 435, 15, 100, 200 , 600 , 112, 56, 23], 9)



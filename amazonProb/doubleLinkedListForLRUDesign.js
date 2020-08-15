class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
    }

    // append to doubly linked list
    append(item){
        let currNode = new Node(item)
        if(!this.head){
            this.head = currNode
            this.tail = currNode
        }else{
            currNode.prev = this.tail
            this.tail.next = currNode
            this.tail = currNode
        }
    }
}

let dll = new DoublyLinkedList()
console.log(dll)


// LRU IMPLEMENTATION 

class LRU{
    constructor(cacheCapacity){
        this.cache = new DoublyLinkedList()
        this.set = new Set()
    }
    
    // Set in a cache, if already present then change its place
    put(key, value){
        
    }

}

let input = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]

let lru = new LRU()
lru.put(1, 1)
lru.put(2, 2)
lru.put(3, 3)
lru.put(4, 4)
lru.put(1, 1)
lru.put(2, 2)
lru.put(5, 5)
lru.put(1, 1)
lru.put(2, 2)
lru.put(3, 3)
lru.put(4, 4)
lru.put(5, 5)
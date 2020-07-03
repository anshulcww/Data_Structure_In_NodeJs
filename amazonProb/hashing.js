// Design a data structure that supports insert, delete, search and getRandom in constant time

class DataStructure{
    constructor(){
        this.arrays = []
        // set value as a key and arrays index as a value
        this.map = new Map()
    }

    // Helper Methods
    // Insert
    insert(data){
        if(!this.map.has(data)){
            let size  = this.arrays.length
            this.arrays.push(data)
            this.map.set(data, size - 1)
            return true
        }
        return false
    }

    // Remove
    // Get index
    remove(data){
        if(!this.map.has(data)){
            let indexValue = this.map.get(data)
            // swap value and last element to use pop function
            let temp = this.arrays[indexValue]
            this.arrays[indexValue] = this.arrays[this.arrays.length - 1]
            this.arrays[this.arrays.length - 1] = temp
            this.arrays.pop()
            
            // remove from map
            this.map.delete(data)

            let index = this.arrays.indexOf(this.arrays[indexValue])
            this.map.set(this.map.get(this.arrays[indexValue]), index)
            return true
        }
        return false
    }

    // Search 
    search(data){
        if(!this.map.has(data)){
            let indexValue = this.map.get(data)
            let index = this.arrays.indexOf(this.arrays[indexValue])
            return index
        }
        return false
    }

    // Get Random
    getRandom(){
        // let size = this.arrays.length
        return this.arrays[Math.floor(Math.random() * 100) % this.arrays.length]
    }
    
    
}

let ds = new DataStructure()
console.log(ds.insert(3))
console.log(ds.insert(0))
console.log(ds.insert(3))
console.log(ds.insert(1))
console.log(ds.remove(0))
console.log(ds.getRandom())
console.log(ds.remove(2))
console.log(ds.insert(2))
console.log(ds.remove(1))
console.log(ds.getRandom())

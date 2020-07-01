// class Node{
//     constructor(data){
//         this.data = data,
//         this.left = null,
//         this.right = null
//     }
   
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     // Helper Methods

//     //insert a node
//     insert(data){
        
//         let newNode = new Node(data)
        
//         if(this.root === null){
//             this.root = newNode
//         }else{
//             // console.log(this.root)
//             this.insertNode(this.root, newNode)
//         }
        
//     }

//     insertNode(node, newNode){
//         if(newNode.data < node.data){
//             if(node.left === null){
//                 node.left = newNode
//             }else{
//                 this.insertNode(node.left, newNode)
//             }
//         }else{
//             if(node.right === null){
//                 node.right = newNode
//             }else{
//                 this.insertNode(node.right, newNode)
//             }
//         }
//     }

//     //get root node
//     getRootNode(){
//         return this.root
//     }

//     inorder(node) 
//         { 
//         if(node !== null) 
//         { 
//             this.inorder(node.left); 
//             console.log(node.data); 
//             this.inorder(node.right); 
//         } 
//         } 
// }

// let bst = new BinarySearchTree()
// bst.insert(15); 
// bst.insert(25); 
// bst.insert(10); 
// bst.insert(7); 
// bst.insert(22); 
// bst.insert(17); 
// bst.insert(13); 
// bst.insert(5); 
// bst.insert(9); 
// bst.insert(27); 
// let root = bst.getRootNode()
// bst.inorder(root)
// console.log(JSON.stringify(bst))

class BinarySearchTree{
    constructor(data){
        this.data = data,
        this.left = null,
        this.right = null
    }
}
let bst = new BinarySearchTree(10)
bst.left = new BinarySearchTree(8)
bst.left.left = new BinarySearchTree(-5)
bst.right = new BinarySearchTree(19)
bst.right.left = new BinarySearchTree(17)
bst.right.right = new BinarySearchTree(21)
console.log(JSON.stringify(bst))
// check if a tree is a binary search tree or not
function checkBST(node, min, max){
    if(node === null){
        return true
    }
    if(node.data <= min || node.data >max){
        console.log(node.data <= min)
        console.log(min)
        console.log(max)
        return false
    }
    return checkBST(node.left, min, node.data) && checkBST(node.right, node.data, max)
}
let minValue = Number.NEGATIVE_INFINITY
let maxValue = Number.POSITIVE_INFINITY
// console.log(maxValue)
console.log(checkBST(bst, minValue, maxValue))
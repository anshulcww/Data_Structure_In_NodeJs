class BinaryTree{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
        // For Min Depth Question
        this.depth = 1
    }
}

let bt = new BinaryTree(1)
bt.left = new BinaryTree(2)
bt.right = new BinaryTree(3)
bt.left.left = new BinaryTree(8)
bt.left.right = new BinaryTree(4)
bt.left.left.left = new BinaryTree(1)
bt.left.left.right =  new BinaryTree(11)
bt.left.right.left = new BinaryTree(1)
bt.left.right.right = new BinaryTree(11)
bt.right.left= new BinaryTree(5)
bt.right.left.left = new BinaryTree(6)
bt.right.left.right = new BinaryTree(67)
bt.right.right= new BinaryTree(5)
bt.right.right.left= new BinaryTree(4)
bt.right.right.right = new BinaryTree(100)


//Leaf at same level


//Odd Even Level difference
function oddEvenLevelDiff(node){
    let q = [];
    q.push(node);
    let oddSum = 0
    let evenSum = 0
    while(q.length > 0){
        let top = q.shift()
        if(top.depth % 2 === 0){
            evenSum = evenSum + top.data
        }else{
            oddSum = oddSum + top.data
        }
        if(top.left){
            top.left.depth = top.depth + 1;
            q.push(top.left)
        }
        if(top.right){
            top.right.depth = top.depth + 1;
            q.push(top.right)
        }
    }
    console.log(oddSum - evenSum)
}
//oddEvenLevelDiff(bt)



//Minimun Depth of a BT
function minDepth(node){
    let q = []
    q.push(node)
    while(q.length >0){
        let top = q.shift()
        //check for leaf node
        if(top.left === null && top.right === null){
            console.log(top.depth)
            return top.depth
        }
        if(top.left){
            top.left.depth = top.depth + 1;
            q.push(top.left)
        }
        if(top.right){
            top.right.depth = top.depth + 1;
            q.push(top.right)
        }
    }
}
// minDepth(bt)


// Print singles
function singles(node){
    if(node === null){
        return
    }
    if(node.left !== null && node.right !== null){
        singles(node.left)
        singles(node.right)
    }else if(node.right !== null){
        console.log(node.right.data)
        singles(node.right)
    }else if(node.left !== null){
        console.log(node.left.data)
        singles(node.left)
    }

}
//singles(bt)



let h =0

// Root to leaf using Inorder & stack
let currSum = 0
let stack = []
function rootToLeaf(node, k){
    if(node === null){
        return 
    }
    currSum = currSum + node.data
    stack.push(node.data)
    if(currSum === k){
        console.log(stack)
        //return stack
    }
    //console.log(stack)
    rootToLeaf(node.left, k)
    rootToLeaf(node.right, k)
    currSum = currSum - node.data
    stack.pop()
}
//rootToLeaf(bt, 121)


// Identical Bt 
function checkIdentical(node1, node2){
    if(node1 === null && node2 === null){
        return 1
    }
    if(node1 !== null && node2 !== null){
        if(node1.data === node2.data && checkIdentical(node1.left, node2.left) && checkIdentical(node1.right, node2.right)){
            return 1
        }
    }
    return 0
}
//checkIdentical(bt1, bt2)

// Reverse Alternate levels
function reverseAlter(node1, node2, lvl){
    if(node1 === null || node2 === null){
        return false
    }
    if(lvl%2 === 0){
        let temp = node1.data
        node1.data = node2.data
        node2.data = temp
    }
    reverseAlter(node1.left, node2.right, lvl+1)
}
//reverseAlter(bt.left, bt.right, 0)
//inOrderTrav(bt)

// Reverse Level Order
function reverseLevelOrderTrav(node){
    let q = []
    let s = []
    q.push(node)
    while(q.length > 0){
        let curr = q.shift()
        s.push(curr.data)
        if(curr.right){
            q.push(curr.right)
        }
        if(curr.left){
            q.push(curr.left)
        }
    }
    console.log(s.reverse())
    // for(var i = s.length-1; i<=0; i-- ){
    //     console.log(s[i])
    // }
}

//reverseLevelOrderTrav(bt)

// Convert to Sum Tree
function convertToSum(node){
    if(node === null){
        return 0
    }
    let oldValue = node.data
    node.data = convertToSum(node.left) + convertToSum(node.right)
    return node.data + oldValue
}
let res = convertToSum(bt)
// console.log(res)
//inOrderTrav(bt)


// Check if a bt is a sumtree
function sumTree(node){
    if(node === null){
        return 1
    }
    //for leaf node
    if(node.left === null && node.right === null){
        return 1
    }

    let leftSum = sum(node.left)
    let rightSum = sum(node.right)
    let total = leftSum + rightSum
    if(total.data === node.data){
        if(sumTree(node.left) && sumTree(node.right)){
            return 1
        }
    }
    return 0
}

//let bool = sumTree(bt)
//console.log(bool)

// Sum of all node
function sum(node){
    if(node === null){
        return 0;
    }
    // console.log(node.data)
    let result = node.data + sum(node.left) + sum(node.right);
    return result
}
//let result2  = sum(bt)
//console.log(result2)




//Left View of BT
function leftView(node){
    if(node === null){
        return null
    }
    let q = []
    q.push(node)
    while(q.length > 0){
        let n = q.length
        for(var i = 1; i <= n; i++){
            // console.log('anshul')
            let top = q.shift()
            if(i === n){
                console.log(top.data)
                
            }
            if(top.left){
                q.push(top.left)
            }
            if(top.right){
                q.push(top.right)
            }
        }
    }
}
// leftView(bt)

// Diameter of BT
function diameter(node){
    if(node === null){
        return 0
    }
    let lHeight = height(node.left);
    let rHeight = height(node.right);

    let lDiameter = diameter(node.left);
    let rDiameter = diameter(node.right)

    return Math.max(1+lHeight+rHeight , Math.max(lDiameter, rDiameter))
}
// let result1 = diameter(bt)
// console.log(result1)


//Sum of Left leaf Nodes
function sumOfLeftLeaf(node){
    if(node == null){
        return 0
    }else if(node.left !=null && node.left.left === null && node.left.right === null){
        return node.left.data + sumOfLeftLeaf(node.right)
    }else{
        return sumOfLeftLeaf(node.left) + sumOfLeftLeaf(node.right)
    }
}
// let result = sumOfLeftLeaf(bt)
// console.log(result)

// Try Height of a special tree when you revise again

//Remove Half Nodes
function removeHalfNodes(node){
    if(node === null){
        return null
    }
    node.left = removeHalfNodes(node.left)
    node.right = removeHalfNodes(node.right)
    //check for leaf node
    if(node.left === null && node.right === null){
        return node
    }
    //check for half node for Left
    if(node.left === null){
        let newNode  = node.right
        return newNode
    }
    
    //check for half node for right
    if(node.right === null){
        let newNode  = node.left
        return newNode
    }
    return node
}
// let result = removeHalfNodes(bt)
// let inOrderResult = inOrderTrav(result)

// Diagonal sum of a BT
function diagonalSum(node){
    let q = [];
    let sum = 0;
    q.push(node)
    q.push(null)
    while(q.length > 0){
        let p = q.shift()
        //breaking condition
        if(p == null){
            q.push(null)
            p = q.shift()
            console.log(sum)
            sum = 0
            if(p== null){
                break
            }
        }
        //Sum calculation
        //console.log(p.data)
        while( p != null){
            //console.log(p.data)
            sum = sum + p.data
            if(p.left){
                q.push(p.left)
            }
            p = p.right
        }
    }
}
//diagonalSum(bt)

//Max nodes level
function maxNodeLevel(node){
    let q = []
    let maxNode = -1
    q.push(node)
    while(q.length > 0){
        let qSize = q.length
        if(qSize > maxNode){
            maxNode = qSize
        }
        let top = q.shift()
        if(top.left){
            q.push(top.left)
        }
        if(top.right){
            q.push(top.right)
        }
    } 
    console.log(maxNode)
}
//maxNodeLevel(bt)


// Convert BT into its mirror
function mirror(node){
    if(node === null){
        return 
    }else{
        mirror(node.left)
        mirror(node.right)
        let temp = node.left
        node.left = node.right
        node.right = temp
    }
    return node
}

//let result = mirror(bt)
//console.log(result)

//Zig Zag Traversal or spiral form
function spiralTrav(node){
    if(node === null ){
        return false
    }
    let s1 = []
    let s2 = []
    s1.push(node);
    while(s1.length > 0){
        let top1 = s1.pop()
        if(top1){
            console.log(top1.data)
            if(top1.left){
                s2.push(top1.left)
            }
            if(top1.right){
                s2.push(top1.right)
            }
            while(s2.length > 0){
                let top2 = s2.pop()
                if(top2){
                    console.log(top2.data)
                    if(top2.right){
                        s1.push(top2.right)
                    }
                    if(top2.left){
                        s1.push(top2.left)
                    }
                }
               
            }
        }
       
    }
}
// spiralTrav(bt)
// Vertical Order
function verticalOrder(node){
    if(node === null){
        return false
    }
    let queue = []
    let nodeData = {
        data : node,
        distance : 0
    }
    queue.push(nodeData);
    let hd = new Map();
    hd.set(0 , [node.data])
    while(queue.length){
        let top = queue.shift();
        if(top.data.left){
            let leftD = top.distance - 1
            let obj  = {
                data : top.data.left,
                distance : leftD
            }
            if(!hd.has(leftD)){
                hd.set(leftD, [obj.data.data])
                // console.log(top.distance)
            }else{
                hd.get(leftD).push(obj.data.data)
            }
            queue.push(obj)
        }
        if(top.data.right){
            let rightD = top.distance + 1
            let obj  = {
                data : top.data.right,
                distance : rightD
            }
            if(!hd.has(rightD)){
                hd.set(rightD, [obj.data.data])
            }else{
                hd.get(rightD).push(obj.data.data)
            }
            queue.push(obj)
        }
    }
    console.log(hd)
}
//verticalOrder(bt)
// Construct a Binary tree from pre order and inorder traversal
let inOrder = [3, 1, 4, 0, 5, 2, 6];
let preOrder = [0, 1, 3, 4, 2, 5, 6];
let preIndex = 0;

function buildTree(inArray, preArray, start, end){
    if(start > end){
        return null
    }
    let treeNode = new BinaryTree(preArray[preIndex++])

    if(start === end){
        return treeNode
    }
    // find index of a node in In order array
    let searchIndex = inArray.indexOf(treeNode.data)
    treeNode.left = buildTree(inArray, preArray, start, searchIndex -1)
    treeNode.right = buildTree(inArray, preArray, searchIndex + 1, end)

    return treeNode

}
// let result = buildTree(inOrder, preOrder, 0, inOrder.length -1)
//console.log(result)
// postOrderTrav(result)
// Full tree are those whose child node has 0 or 2 child nodes
function isFull(node){
    //if empty tree
    if(node == null){
        return true
    }

    //if leaf node (0 child)
    if(node.left === null && node.right === null){
        return true
    }

    if(node.left && node.right){
        return (isFull(node.left) && isFull(node.right))
    }
    return false
}
//let result = isFull(bt)
//console.log(result)
//console.log(bt)
//Pre Order Trav 
function preOrderTrav(bt){
    //console.log(bt.data)
    if(bt == null){
        return false
    }
    console.log(bt.data)
    preOrderTrav(bt.left)
    preOrderTrav(bt.right)
}

function postOrderTrav(bt){
    //console.log(bt.data)
    if(bt == null){
        return false
    }
    postOrderTrav(bt.left)
    postOrderTrav(bt.right)
    console.log(bt.data)
}


// Inorder Traversal output = [40 , 20, 60, 10, 50, 30]
function inOrderTrav(bt){
    //console.log(bt.data)
    if(bt == null){
        return false
    }
    inOrderTrav(bt.left)
    console.log(bt.data)
    inOrderTrav(bt.right)
}
//inOrderTrav(bt)


// Height of a binary tree
function height(node){
    if(node === null){
        return 0
    }
    let left = height(node.left)
    let right = height(node.right)
    if(left > right){
        h = 1 + left
    }else{
        h = 1 + right
    }
    return h
}
// let result = height(bt)
// console.log(result)
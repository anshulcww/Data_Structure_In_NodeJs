class BinaryTree{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

let bt = new BinaryTree(2)
bt.left = new BinaryTree(7)
bt.right = new BinaryTree(5)
//bt.left.left = new BinaryTree(40)
bt.left.right = new BinaryTree(6)
bt.left.right.left = new BinaryTree(1)
bt.left.right.right = new BinaryTree(11)
//bt.right.left= new BinaryTree(80)
bt.right.right= new BinaryTree(9)
bt.right.right.left= new BinaryTree(4)

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
let result = removeHalfNodes(bt)
let inOrderResult = inOrderTrav(result)

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
let h =0
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
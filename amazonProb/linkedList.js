//console.log('Anshul')
//Implementation of Linked List in Javascript

class Node{
    constructor(element){
        this.element = element;
        this.next = null
    }
}
// //var a = new Node('Anshul')
// //console.log(a, "anshul")

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }
//     // functions to be implemented 
    
//     // add(element) 
//     add(element){
//         var node = new Node(element);
//         //to store current node
//         var current;

//         if(this.head == null){
//             this.head = node
//         }else{
//             current = this.head

//             while(current.next){
//                 current = current.next;
//             }
//             current.next = node;
//             //console.log(current.next)
//         }
//         this.size++;
//     }
//     printList() 
//         { 
//             var curr = this.head; 
//             var str = ""; 
//             while (curr) { 
//                 str += curr.element + " "; 
//                 curr = curr.next; 
//             } 
//             console.log(str); 
//         } 
//         removeElement(element) 
//         { 
//             var current = this.head; 
//             var prev = null; 
//             // console.log(current)
//             // iterate over the list 
//             while (current != null) { 
//                 // comparing element with current 
//                 // element if found then remove the 
//                 // and return true 
//                 console.log(current.element === element.element)
//                 if (current.element === element.element) { 
//                     //console.log(element, 'element')
//                     if (prev == null) { 
//                         this.head = current.next; 
//                     } else { 
//                         prev.next = current.next; 
//                     } 
//                     this.size--; 
//                     // return current.element; 
//                 } 
//                 prev = current; 
//                 current = current.next; 
//             } 
//             return -1; 
//         } 
//     // insertAt(element, location) 
//     // removeFrom(location) 
//     // removeElement(element) 
  
//     // Helper Methods 
//     // isEmpty 
//     // size_Of_List 
//     // PrintList 
// }

// Middle Element
function middleElement(head){
    //console.log(ll)
    if(head == null){
        return head
    }
    let p = head
    // console.log(p.next)
    let q = head
    // console.log(q.next)
    while(q != null && q.next != null){
        q = q.next.next;
        p = p.next;
    }
    // console.log(p)
    return p
}

//Delete Middle Element
function deleteMiddle(ll){
  let p = ll;
  let q = ll;
  let prevNode = null;

  while(q && q.next){
      q = q.next.next;
      prevNode = p
      p = p.next
  }
  prevNode.next = p.next
  return ll
  //let result = ll.removeElement(p)

  //console.log(result)
  //console.log(ll)
}

// Nth Node from the end
function nthNodeFromTheEnd(n, ll){
    let p = ll
    let q = p;
    for(var i = 0; i < n; i++){
        q = q.next
    }
    while(q){
        q = q.next;
        p = p.next;
    }
    console.log(p)
    return p
}

class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}

let reverseHead = null;

var ll = new ListNode(5)
ll.next = new ListNode(5)
ll.next.next = new ListNode(15)
ll.next.next.next = new ListNode(20)
ll.next.next.next.next = new ListNode(15)
ll.next.next.next.next.next = new ListNode(10)
ll.next.next.next.next.next.next = new ListNode(20)
// ll.next.next.next.next.next.next.next = new ListNode(0)

// var ll2 = new ListNode(2)
// ll2.next = new ListNode(3)
// ll2.next.next = new ListNode(20)
// ll2.next.next.next = new ListNode(12)
// ll2.next.next.next.next = new ListNode(13)

// Remove Duplicates from an Unsorted Linkedlist
// USING two loops Time Complexity O(n^2) for reducing O(n)
function removeDupUnSortedLLUsingTwoLoop(node){
    let p = node
    while(p != null && p.next != null){
        let q = p.next
        let prev = p
        while(q != null){
            if(p.data == q.data){
                prev.next = q.next
            }
            prev = q
            q = q.next
        }
        p = p.next
    }
    console.log(JSON.stringify(node))
    return node
}

removeDupUnSortedLLUsingTwoLoop(ll)

// Remove duplicates from a Sorted LL
function removeDupSortedLL(node){
    let p = node
    while(p != null && p.next != null){
        if(p.val == p.next.val){
            let q = p.next.next
            if(q== null){
                p.next = null
            }
            p.next = q
        }
        if(p.val != p.next.val){
            p = p.next
        }
    }
    console.log(JSON.stringify(node))
    return node
}
// removeDupSortedLL(ll)

// Sort a LL
function mergeSortLL(node){
    if(node == null || node.next == null){
        return node
    }
    let middle = middleElement(node)
    //console.log(middle)
    let middleNext = middle.next
    middle.next = null
    let first = mergeSortLL(node)
    let second = mergeSortLL(middleNext)
    let sortedList = mergeTwo(first, second)
    return sortedList
}
// mergeSortLL(ll)
// console.log(JSON.stringify(ll))

// Merge two sorted Linked list
function mergeTwo(node1, node2){
    let p = node1
    let q = node2
    let s = null
    let newHead = null
    if( p == null) { return q }
    if( q == null) { return p }

    if(p && q){
        if(p.val > q.val){
            s = q
            q = s.next
        }else{
            s = p
            p = s.next
        }
    }
    newHead = s
    while( p && q){
        if(p.val > q.val){
           s.next =  q
           s = q
           q = s.next  
        }else{
            s.next = p
            s = p
            p = s.next
        }
    }
    if(p == null){
        s.next = q
    }
    if(q == null){
        s.next = p
    }
    // console.log(JSON.stringify(newHead))
    return newHead
}

// mergeTwo(ll, ll2)


// Add Two Linked List 
function addTwoLL(node1, node2){
    if(node1 === null){
        return node2
    }
    if(node2 === null){
        return node1
    }
    if(node1 == null && node2 == null){
        return null
    }
    let resSumLL = null
    let prev = null
    let sum = 0
    let carry = 0
    while(node1 != null || node2 != null){
        let p = node1 != null ? node1.val : 0
        let q = node2 != null ? node2.val : 0
        sum = p + q + carry
        console.log(sum  + " " + carry)
        carry = sum >= 10 ? 1 : 0
        sum = sum % 10
        let temp = new Node(sum)
        if(resSumLL === null){
            resSumLL = temp
        }else{
            prev.next = temp
        }
        prev = temp
        if(node1 != null){
            node1 = node1.next
        }
        if(node2 != null){
            node2 = node2.next
        }
    }
    console.log(JSON.stringify(resSumLL))
    return resSumLL
}
// addTwoLL(ll, ll2)

function countTotalNodes(head){
    let currCount = 0
    if(head === null){
        return currCount
    }
    let p =  head
    while(p !== null){
        currCount++;
        p = p.next
    }
    return currCount
}

// Swap Kth node from beginning with Kth node from end in a Linked List
function swapKth(nodeList, k){
    // Count total nodes
    let count = countTotalNodes(nodeList)
    //console.log(count, 'count')
    if(k > count){
        return false
    }
    
    // If x (kth node from start) and y(kth node from end) 
    // are same 
    if (2*k - 1 == count){ 
        return false;
    }

    // kth node from begining (X)
    let x = nodeList
    let xPrev = null
    for(var i = 1; i < k; i++){
        xPrev = x
        x= x.next
    }

    //Kth node from the end
    let y = nodeList
    let yPrev = null
    for(var i = 1; i<count-k +1; i++){
        yPrev = y
        y = y.next
    }
    
    // If x_prev exists, then new next of it will be y. 
    // Consider the case when y->next is x, in this case, 
    // x_prev and y are same. So the statement  
    // "x_prev->next = y" creates a self loop. This self 
    // loop will be broken when we change y->next.
    
    if(xPrev != null){
        xPrev.next = y
    }
    
    if(yPrev != null){
        yPrev.next = x
    }

    // Swap
    let temp = x.next
    x.next = y.next
    y.next = temp
    console.log(JSON.stringify(nodeList))
    return nodeList
}
//swapKth(ll, 2)


//Add 1 number represented linked list
function addOne(head){
    let p = reverseLL(head);
    //console.log(JSON.stringify(reverse))
    let result  = addOneUtil(p)
    return reverseLL(result)
}
function addOneUtil(head){
    let res = head;
    let carry = 1;
    let sum = 0
    while(head){
        // sum
        sum = carry + head.val
        carry = sum >= 10 ? 1 : 0
        // update sum 
        sum = sum%10
        head.val = sum 
        temp = head;
        head = head.next 
    }

    if(carry > 0){
        temp.next = new Node(carry)
    }
    return res
}
//let result = addOne(ll)
//console.log(JSON.stringify(result))

//Given a linked list of 0s, 1s and 2s, sort it. 
function sortLL(head){
    let p = head;
    let count = [0, 0, 0];
    //console.log(p)
    while(p){
        count[p.val]++;
        p = p.next
    }
    let i =0;
    p = head;

    while(p){
        if(count[i] === 0){
            i++;
        }else{
            p.val = i;
            count[i]--;
            p = p.next
        }
    }
    return head
}
//let result = sortLL(ll)
//console.log(JSON.stringify(result))


// var ll = new LinkedList()
// ll.add(20)
// ll.add(40)
// ll.add(60)
// ll.add(80)
// ll.add(100)
// ll.add(102)
//let result = middleElement(ll)
//console.log(result)

//let result = deleteMiddle(ll)
//console.log(result)
//console.log(ll)
//nthNodeFromTheEnd(2, ll)
// console.log(ll);

//reverse print ll
function reversePrint(ll){
    let p = ll
    if( p == null){
        return
    }
    reversePrint(p.next)
    console.log(p.val)
}
//reversePrint(ll)

//Reverse a LinkedList
function reverseLL(ll){
    let p = ll
    if(p.next == null){
        //console.log('anshul')
        reverseHead = p

        return
    }
    reverseLL(p.next)
    //console.log(p.next)
    let q = p.next;
    q.next =p
    p.next = null
    // console.log(reverseHead)
    return reverseHead
}
//let result = reverseLL(ll)
//console.log(result)

//Rotate a LL
function rotateLL(head, n){
    let p = head;
    let r =1;
    let newHead = null;
    while(p){
        if(r == n){
            break;
        }
        r++;
        p = p.next;
    }
    newHead = p.next;
    p.next = null;
    q = newHead;
    while(q.next != null){
        q = q.next
    }
    q.next = head
    return newHead
}

//let result = rotateLL(ll, 4)
//console.log(JSON.stringify(result))


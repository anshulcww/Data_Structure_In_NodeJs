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
    let p = head
    // console.log(p.next)
    let q = head
    // console.log(q.next)
    while(q != null && q.next != null){
        q = q.next.next;
        p = p.next;
    }
    console.log(p)
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
var ll = new ListNode(1)
ll.next = new ListNode(9)
ll.next.next = new ListNode(9)
ll.next.next.next = new ListNode(9)
// ll.next.next.next.next = new ListNode(1)
// ll.next.next.next.next.next = new ListNode(2)
// ll.next.next.next.next.next.next = new ListNode(2)
// ll.next.next.next.next.next.next.next = new ListNode(0)

let reverseHead = null;

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
let result = addOne(ll)
console.log(JSON.stringify(result))

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


var express = require('express');
var app = express();

var LinkedList = require('singly-linked-list');
var list = new LinkedList();
 
//console.log(list.isEmpty());
// --> true
 
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

//console.log(list);

function middleElement(){
let p = list.getHeadNode();
let q = p.next.next;

while(q.next != null){
    p = p.next;
    q = q.next;
}
console.log(p.getData());


}
//middleElement();

let head  = list.getHeadNode();

function detectLoop(){
    head.next.next.next.next = head.next.next;

    let p = head;
    let q = head;

    while(q.next && q){
        p = p.next;
        q = q.next.next;
        //console.log(p);
        //console.log(q);
        if(p == q){
            console.log(true);
            return true;
        }
    }

}
//detectLoop()

// function to get 3rd node from end 
function nthNodeFromEnd(){
    let n = 3
    let p =  list.getHeadNode();
    let q = p.next.next;
    while(q.next){
        p = p.next;
        q = q.next;
    }
    console.log(p);
    return p;
}
//nthNodeFromEnd();

app.listen(3000);
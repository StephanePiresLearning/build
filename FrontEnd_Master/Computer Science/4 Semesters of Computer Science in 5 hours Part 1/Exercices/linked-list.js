

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.tail = null
        this.head = null
        this.length = 0
    }

    delete(index){
        if(this.length <= 1){
          this.head = null
          this.length = 0
        } else {
            if(index === 1){
                this.head = this.head.next
            } else {
                let elem = this.head
                let nextElem = this.head.next
                for( let i = 1; i < index - 1; i++){
                    console.log('toto')
                    elem = elem.next
                    nextElem = nextElem.next
    
                }
                elem.next = nextElem.next
    
                nextElem.next = null
            }
            this.length--
        }

    }

    pop(){
        let elem = this.head
        let elemNext = this.head.next
        while(elemNext.next != null){
            elem = elem.next
            elemNext = elemNext.next
        }
        elem.next = null
    }

    push(value){
        if(this.length === 0){
            this.head = value
            this.length++
        } else {
            let elem = this.head
                while(elem.next != null){
                    elem = elem.next
                }
                elem.next = value
                this.length++
            }
    }
    

    _find(value, _test=this._test) {

    }

    _test(a,b){
        return a === b
    }

    _testIndex(search, __, i){
        return search === i
    }

    get(index){

    }



}

const myLinkedList = new LinkedList

const nodeOne = new Node(1)
const nodeTwo = new Node(2)
const nodeThree = new Node(3)
const nodeFour = new Node(4)


myLinkedList.push(nodeOne)
myLinkedList.push(nodeTwo)
myLinkedList.push(nodeThree)
myLinkedList.push(nodeFour)


console.log(myLinkedList.head.value)
console.log(myLinkedList.head.next.value)
console.log(myLinkedList.head.next.next.value)

console.log('Length : ' +myLinkedList.length)


console.log(myLinkedList.head)
console.log(myLinkedList.head.next)
console.log(myLinkedList.head.next.next)
console.log(myLinkedList.head.next.next.next)

console.log('before delete')

myLinkedList.delete(1)

console.log(myLinkedList.head)
console.log(myLinkedList.head.next)
console.log(myLinkedList.head.next.next)
console.log(myLinkedList.head.next.next.next)

console.log('after delete')

myLinkedList.pop()

console.log(myLinkedList.head)
console.log(myLinkedList.head.next)
console.log(myLinkedList.head.next.next)

console.log('after pop')
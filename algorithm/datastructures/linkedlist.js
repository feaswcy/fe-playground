// push， getElementAt， insert，removeAt，indexOf，getHead

/**
 * @param {string} a
 * @param {string} b
 * @return {Boolean} 是否相等
 */

 /**
  * @param {*} a 
  * @param {*} b 
  */
function defaultEquals(a, b){
   return a === b 
}

/**
 * @class Node
 */
class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}

/**
 * @export
 * @class LinkedList
 */

export default class LinkedList{
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn
        this.count = 0
        this.head = undefined
    }
    push(element){
        let node = new Node(element), current
        if(!this.head){
            this.head = element
        } else {
            current = head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    getElementAt(index){
        if(index >= 0 && index < this.count ){
            let current = this.head
            for (let i = 0; i < index && node != null; i++) {
                current = current.next
            } 
            return current
        } 
        return undefined
    }
    insert(element, index){
        if(index>=0 && index<=this.count){
            let node = new Node(element)
            if(index===0){
                let current = this.head
                node.next = current.next
                this.head = node
            }else{
                const previous = this.getElementAt(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.count++
            return current.element
        }
        return undefined
    }
    removeAt(){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    indexOf(){
        let current = this.head;
        for (let i = 0; i < this.size() && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    getHead(){
        return this.head
    }
    size(){
        return this.count
    }
}
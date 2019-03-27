export default class Stack{
    constructor(){
        this.count = 0
        this.stack = {}
    }
    push(element){
        this.items[this.count] = element
        this.count++
    }
    pop(){
        if(this.count===0){
            return ''
        }
        let result = this.items[this.count]
        delete this.items[this.count]
        this.count--
        return result
    }
    size(){
        return this.count
    }
    
}
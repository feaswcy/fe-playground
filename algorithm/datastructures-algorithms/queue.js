export default class Queue{
    constructor(){
        this.queue = []
        this.count = 0
        this.lowestcount = 0
    }
    enqueue(item){
        this.queue.push(item)
        this.count++
    }
    /**
     * @returns queue Item 队列中队首元素
     */
    dequeue(){
        if(this.count===0){
            return undefined
        }
        let peekItem = this.queue[this.lowestcount]
        delete this.queue[this.lowestcount]
        this.lowestcount++
        return peekItem
    }
    size(){
        return this.count - this.lowestcount
    }
    isEmpty(){
        return this.size() === 0
    }
    front(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.queue[this.lowestcount]
    }
    size(){
        return this.count
    }
    toString(){
        if(this.isEmpty){
            return ''
        }
        let peekItem = `${this.queue[this.lowestcount]}`
        for(let i =0; i<this.size(); i++){
            peekItem = peekItem + `${this.queue[i]}`
        }
        return peekItem
    }
}
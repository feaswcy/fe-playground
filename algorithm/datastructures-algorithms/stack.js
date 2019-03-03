// 为了更加面向未来，用es6 class实现，原型链写法可以自行参照相关规范，进行转换~~
export default class Stack{
    constructor(){
        this.count = 0
        this.items = {}
    }
    push(element){
        this.items[this.count] = element
        this.count++
    }
    pop(){

    }
    size(){

    }
    
}
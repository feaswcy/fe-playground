// 事件监听与派发
class eventEmitter{
    constructor(){
        this.events = {}
    }
    on(evtName, cb){
        if (this.events[evtName]){
            this.events[evtName].push(cb)
        }
        this.events[evtName] = []
        this.events[evtName].push(cb)
    }
    emit(evtName){
        let cbArr = this.events[evtName]
        cbArr.foreach((cb, index)=>{
            if(Object.prototype.toString.call(cb) === 'Obejct Function'){
                cb && cb()
            }
        })
    }
    once(){

    }
    off(){
        
    }
}
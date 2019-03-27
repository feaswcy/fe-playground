// add delete values union  isSubsetOf intersection difference
// Ecmascript2016 通过set类型实现了set数据结构
class Set {
    constructor(){
        this.items = {}
    }
    /**
     * @param {String} element
     * @returns Boolean 操作是否成功
     * @memberof Set
     */
    add(element){
        if (this.has(element)){
            return false
        }
        this.items[element] = element
    }
    delete(element){
        if (!this.has(element)) {
            return false
        }
        delete this.items.element
        return true
    }
    has(element){
        // this.items.hasOwnProperty(element) ?
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    // return all the values of a set
    values(){
        return Object.values()
    }
    union(){
        const other = new Set()
        this.values.foreach(item => other.add(item))
    }
    isSubsetOf(otherset){
        let isSubSet = true
        this.values.every(value => {
            if(!otherset.has(value)){
                isSubSet = false
                return false
            }
            return true
        })
        return isSubSet
    }
    intersection(otherset){
        const intersection = new Set()
        const values = this.values
        const othervalues = otherset.values
        let biggerSet = values;
        let smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.foreach(value => {
            if (biggerSet.has(value)){
              intersectionSet.add(value);
            }
        })
        return intersectionSet
    }
    difference(){
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
}
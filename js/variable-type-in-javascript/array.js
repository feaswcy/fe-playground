function isArray(input) {
    if (Array.isArray) {
        return Array.isArray(input)
    }
    return Object.prototype.toString.call(input) === '[object Array]'
}

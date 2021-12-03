Array.prototype.replace = function (callback) {
    for (let index = 0; index < this.length; index++) {
        this[index] = callback(this[index], index, this); 
    }
    return this;
}
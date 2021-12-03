Array.prototype.replaceRight = function (callback) {
    for (let index = this.length - 1; index >= 0; index--) {
        this[index] = callback(this[index], index, this); 
    }
    return this;
}